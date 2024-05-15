// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMwbGuqwyj4CVGd29woQdC8fI9jTpajB8",
  authDomain: "jg-shop-2b530.firebaseapp.com",
  projectId: "jg-shop-2b530",
  storageBucket: "jg-shop-2b530.appspot.com",
  messagingSenderId: "1007855461733",
  appId: "1:1007855461733:web:c885c5e1b04227e77b6d8c",
  measurementId: "G-YTWY1N4MGY"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }