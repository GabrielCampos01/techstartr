import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhJGp39N1vuWg4jD2bPwVfMf2zZNOk1A4",
  authDomain: "techstart-ccf52.firebaseapp.com",
  projectId: "techstart-ccf52",
  storageBucket: "techstart-ccf52.firebasestorage.app",
  messagingSenderId: "445503292261",
  appId: "1:445503292261:web:e8648de1b838570b2ad78c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };