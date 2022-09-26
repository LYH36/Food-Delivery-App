import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseconfig = {
  apiKey: "AIzaSyA5Qyapczfs-A7clPU6CMnnrV7z3sQnBlw",
  authDomain: "food-delivery-project-d986e.firebaseapp.com",
  databaseURL:
    "https://food-delivery-project-d986e-default-rtdb.firebaseio.com",
  projectId: "food-delivery-project-d986e",
  storageBucket: "food-delivery-project-d986e.appspot.com",
  messagingSenderId: "290928220307",
  appId: "1:290928220307:web:36ae595e270920f4ec9566",
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseconfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
