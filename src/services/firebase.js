
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCWG6x1EsCp81nIRiHmm-FDr-BdMLtpf5s",
    authDomain: "sublime-tienda.firebaseapp.com",
    projectId: "sublime-tienda",
    storageBucket: "sublime-tienda.appspot.com",
    messagingSenderId: "568889658198",
    appId: "1:568889658198:web:c4db6f1d8514ea714564f7"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app)


export default firestoreDB