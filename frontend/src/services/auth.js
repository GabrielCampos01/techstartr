import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

async function loginComEmail(email, senha) {
  const credencial = await signInWithEmailAndPassword(
    auth,
    email,
    senha
  );

  return credencial.user;
}

export { loginComEmail };