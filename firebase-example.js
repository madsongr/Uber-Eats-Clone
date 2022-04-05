import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

// use your firebase  project configs 

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;