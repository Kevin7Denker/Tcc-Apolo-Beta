import {
  setDoc,
  doc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  runTransaction,
  orderBy,
  query,
  limit,
  updateDoc,
} from "firebase/firestore";
import { db } from "../data/Config";
import { getPerfil } from "../../Spotify/Repository/UserFunctions";
import { Usuario } from "../../../Interfaces/Usuario";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function vefUser(user: Usuario) {
  const docSnap = await getDoc(doc(db, "Users", `${user.id}`));

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    await setDoc(doc(db, "Users", `${user.id}`), {
      id: user.id,
      numAval: 0,
    });

    return null;
  }
}

export async function getNumAval() {
  const data = await getPerfil();
  const docSnap = await getDoc(doc(db, "Users", `${data.id}`));

  if (docSnap.exists()) {
    const number = docSnap.data();
    return number.numAval;
  }
}

export async function getAvaliacoes() {
  const data = await getPerfil();
  const q = query(
    collection(db, "Users", `${data.id}`, "Avaliação"),
    orderBy("data", "desc")
  );

  const querySnapshot = await getDocs(q);

  const avaliacoes = [];

  querySnapshot.forEach((doc) => {
    const avaliacao = doc.data();
    avaliacoes.push(avaliacao);
  });

  return avaliacoes;
}

export async function setAvaliacao(
  musica: any,
  titulo: string,
  avaliacao: string,
  disco: any,
  id: any
) {
  const url = collection(db, "Users", `${id}`, "Avaliação");

  const currentTime = new Date();
  const formattedDate = currentTime.toLocaleString();

  await addDoc(url, {
    musica: musica,
    titulo: titulo,
    avaliacao: avaliacao,
    disco: disco,
    data: `${formattedDate}`,
    idUser: id,
  });

  await runTransaction(db, async (transaction) => {
    const docRef = doc(db, "Users", `${id}`);
    const docSnap = await transaction.get(docRef);

    if (docSnap.exists()) {
      const currentNumAval = docSnap.data().numAval || 0;
      transaction.update(docRef, {
        numAval: currentNumAval + 1,
      });
    }
  });
}

export async function postAvaliation(
  musica: any,
  title: string,
  text: string,
  disco: any,
  id: any,
  user: Usuario,
  data: String
) {
  const url = collection(db, "Posts");

  await addDoc(url, {
    user,
    musica,
    title,
    text,
    disco,
    id,
    data,
  });
}

export async function getPosts() {
  const querys = query(collection(db, "Posts"), limit(100));
  const docSnap = await getDocs(querys);

  const Posts = [];

  docSnap.forEach((doc) => {
    const data = doc.data();
    Posts.push(data);
  });

  await AsyncStorage.setItem("Posts", JSON.stringify(Posts));

  return Posts;
}

export async function Validation(id: String, musica: String) {
  const docSnap = await getDocs(collection(db, "Users", `${id}`, "Avaliação"));

  const aval = <any>[];

  docSnap.forEach((doc) => {
    const data = doc.data();
    aval.push(data);
  });

  const objetoEncontrado = aval.find(
    (item: { musica: { name: String } }) => item.musica.name === musica
  );

  if (objetoEncontrado) {
    return objetoEncontrado;
  } else {
    return false;
  }
}

async function getAvaliacaoCollectionId(userId: string) {
  const avaliacaoCollectionRef = collection(db, "Users", userId, "Avaliação");

  const avaliacaoCollectionId = avaliacaoCollectionRef.id;

  return avaliacaoCollectionId;
}

export async function updateAvaliation(
  userId: string,
  newDisco: string,
  newTitle: string,
  newText: string
) {

  const postId =  await getAvaliacaoCollectionId(userId);
  const docRef = doc(db, "Users", userId, "Avaliação", postId);

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        disco: newDisco,
        title: newTitle,
        text: newText,
      });
      console.log("Documento atualizado com sucesso!");
    } else {
      console.log("Documento não encontrado!");
    }
  } catch (error) {
    console.error("Erro ao atualizar o documento: ", error);
  }
}