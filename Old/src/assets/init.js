import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMOiTpc_PPERG4ZhPbTQIZ8uAHnNzsKos",
    authDomain: "speech-olympiad.firebaseapp.com",
    projectId: "speech-olympiad",
    storageBucket: "speech-olympiad.appspot.com",
    messagingSenderId: "718732602589",
    appId: "1:718732602589:web:d2b3a682106d06fc773f34",
    measurementId: "G-T1D958J5EE"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
export default db