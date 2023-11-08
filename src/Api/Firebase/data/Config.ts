import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOLofpW3xUIokkew5Dy6zmULZeofd-OGs",
  authDomain: "apolo-c61bc.firebaseapp.com",
  projectId: "apolo-c61bc",
  storageBucket: "apolo-c61bc.appspot.com",
  messagingSenderId: "318135186830",
  appId: "1:318135186830:web:03d1ebb7428e71782520df",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

