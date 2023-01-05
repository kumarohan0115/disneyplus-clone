import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/storage'



const firebaseConfig = {
    apiKey: "AIzaSyByxwlSGP-B2a8a2aS7hA03RtC738KQUMQ",
    authDomain: "disneyplus-clone-fa262.firebaseapp.com",
    projectId: "disneyplus-clone-fa262",
    storageBucket: "disneyplus-clone-fa262.appspot.com",
    messagingSenderId: "1016502558267",
    appId: "1:1016502558267:web:486b0c65251e3e18f5061e"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;