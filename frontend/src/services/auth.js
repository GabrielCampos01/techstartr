import {
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";

import { auth } from "./firebase";

async function cadastrarUsuario(email, senha, nome) {
  const credencial = await createUserWithEmailAndPassword(auth, email, senha);

  if (nome) {
    await updateProfile(credencial.user, {
      displayName: nome,
    });
  }

  return credencial.user;
}

async function entrarComEmail(email, senha) {
  const credencial = await signInWithEmailAndPassword(auth, email, senha);

  return credencial.user;
}

async function entrarComoConvidado() {
  const credencial = await signInAnonymously(auth);

  return credencial.user;
}

async function sair() {
  await signOut(auth);
}

async function recuperarSenha(email) {
  await sendPasswordResetEmail(auth, email);
}

export {
  cadastrarUsuario,
  entrarComEmail,
  entrarComoConvidado,
  sair,
  recuperarSenha,
};