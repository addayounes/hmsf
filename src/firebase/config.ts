import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig: firebase.FirebaseOptions = {
    apiKey: "AIzaSyCKKTgdPMholaAbnrhURy_t9aCqjBo7TBA",
    authDomain: "hmsf-flowers.firebaseapp.com",
    projectId: "hmsf-flowers",
    storageBucket: "hmsf-flowers.appspot.com",
    messagingSenderId: "615574684610",
    appId: "1:615574684610:web:14f9ae75d389c3608a0c5b",
};

const app: firebase.FirebaseApp = initializeApp(firebaseConfig);

export default app;
