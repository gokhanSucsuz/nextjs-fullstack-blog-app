import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: process.env.FIREBASE,
	authDomain: "blogapp-56837.firebaseapp.com",
	projectId: "blogapp-56837",
	storageBucket: "blogapp-56837.appspot.com",
	messagingSenderId: "567117209076",
	appId: "1:567117209076:web:b8839bcf40f62c35bfeda1"
};

export const app = initializeApp(firebaseConfig);
