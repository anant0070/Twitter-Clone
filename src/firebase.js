import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDarvb35bwH6WLeXgm9htzB_S0rN6dV8RE",
    authDomain: "twitter-clone-3c107.firebaseapp.com",
    projectId: "twitter-clone-3c107",
    storageBucket: "twitter-clone-3c107.appspot.com",
    messagingSenderId: "37931973818",
    appId: "1:37931973818:web:2ae09e7d6cd4d99cbc5683",
    measurementId: "G-QD8GR2K4MK"
  };

  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app);