import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlbk9EIGMVNB10FKY392uwtksGmbnodBM",
  authDomain: "react-fire-6e442.firebaseapp.com",
  projectId: "react-fire-6e442",
  storageBucket: "react-fire-6e442.appspot.com",
  messagingSenderId: "1046767609489",
  appId: "1:1046767609489:web:54e36cb00cdb2af79e0130"
};

const app = initializeApp(firebaseConfig);  
export const storage = getStorage(app);
export const firestore = getFirestore(app);

export async function uploadFile(file, nameDoc) {
  const storageRef = ref(storage, `${nameDoc}`)
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}