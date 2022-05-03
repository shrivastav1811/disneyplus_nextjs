import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAnRMtctjrnvHD0SywJeY7oxIli_Q-TfWo",
    authDomain: "disney-plus-743b9.firebaseapp.com",
    projectId: "disney-plus-743b9",
    storageBucket: "disney-plus-743b9.appspot.com",
    messagingSenderId: "991534783210",
    appId: "1:991534783210:web:2a32228d3fba48d368d593"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();
    export {db,storage,app};