import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";

async function criarPerfilUsuario(uid, dados) {
  const referenciaUsuario = doc(db, "users", uid);

  const perfil = {
    id: uid,
    name: dados.name,
    nick: dados.nick,
    email: dados.email,
    github: dados.github || "",
    bio: dados.bio || "",
    language: dados.language || "Java",
    connections: [],
    rankingPoints: 0,
    duelWins: 0,
    duelLosses: 0,
    trainingSessions: 0,
    history: [],
    guest: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await setDoc(referenciaUsuario, perfil);

  return perfil;
}

async function buscarPerfilUsuario(uid) {
  const referenciaUsuario = doc(db, "users", uid);
  const snapshot = await getDoc(referenciaUsuario);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
}

async function atualizarPerfilUsuario(uid, dados) {
  const referenciaUsuario = doc(db, "users", uid);

  const alteracoes = {
    ...dados,
    updatedAt: new Date().toISOString(),
  };

  await updateDoc(referenciaUsuario, alteracoes);

  return alteracoes;
}

export {
  criarPerfilUsuario,
  buscarPerfilUsuario,
  atualizarPerfilUsuario,
};