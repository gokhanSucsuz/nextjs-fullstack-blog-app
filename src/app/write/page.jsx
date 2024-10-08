"use client";
import React, { useEffect, useState } from 'react';
import styles from "./writePage.module.css";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';

const storage = getStorage(app);

// Dynamically import ReactQuill to ensure it is only used on the client side
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const WritePage = () => {
    const { status } = useSession();
    const router = useRouter();

    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (status === "authenticated" && file) {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            const upload = () => {
                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            setMedia(downloadURL);
                        });
                    }
                );
            };

            upload();
        }
    }, [file, status]);

    useEffect(() => {
        if (status === "loading") {
            return;
        }
        if (status === "unauthenticated") {
            router.push("/");
        }
    }, [status, router]);

    const slugify = (str) => {
        return str.toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                catSlug: "category",
                slug: slugify(title)
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            // Handle successful submission
        } else {
            // Handle errors
        }
    };

    if (status === "loading") {
        return (<div className={styles.loading}>Loading...</div>);
    }

    return (
        <div className={styles.container}>
            <input type="text" placeholder='Title' className={styles.input} onChange={(e) => setTitle(e.target.value)} />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt='plus' width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.buttons}>
                        <input
                            type='file'
                            id='image'
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                        />
                        <button className={styles.addButton}>
                            <label htmlFor="image">
                                <Image src="/image.png" alt='plus' width={16} height={16} />
                            </label>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt='plus' width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt='plus' width={16} height={16} />
                        </button>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...' />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>Publish</button>
        </div>
    );
};

export default WritePage;
