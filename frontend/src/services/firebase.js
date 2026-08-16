import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxZuLvIo-juRtQzrPqsiOJe3x_KaXLJp0",
  authDomain: "techstartr-a80b2.firebaseapp.com",
  projectId: "techstartr-a80b2",
  storageBucket: "techstartr-a80b2.firebasestorage.app",
  messagingSenderId: "480583670358",
  appId: "1:480583670358:web:7d340c8fa209ab177c79f7",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };