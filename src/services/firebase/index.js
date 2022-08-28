import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDITODzWPxRMtABGDKXm3yv3sDGv1vg8Cs",
  authDomain: "comision-react.firebaseapp.com",
  projectId: "comision-react",
  storageBucket: "comision-react.appspot.com",
  messagingSenderId: "133590655692",
  appId: "1:133590655692:web:acec48de37fea0bd7c9869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)

