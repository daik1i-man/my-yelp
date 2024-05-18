import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAxVJlTV-4ALngHa-a7h2fjx1gBuBmCfmE",
    authDomain: "my-yelp-6411a.firebaseapp.com",
    projectId: "my-yelp-6411a",
    storageBucket: "my-yelp-6411a.appspot.com",
    messagingSenderId: "141935261021",
    appId: "1:141935261021:web:ccd06ff6e16ca039e4a4b4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };