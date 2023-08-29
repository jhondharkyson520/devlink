import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBiX98z44bYXqA1-jhfVsmiEvBj2NIcCUw",
  authDomain: "reactlinks-6ccf7.firebaseapp.com",
  projectId: "reactlinks-6ccf7",
  storageBucket: "reactlinks-6ccf7.appspot.com",
  messagingSenderId: "366696480696",
  appId: "1:366696480696:web:2b07dd31569d4db8cb194d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };