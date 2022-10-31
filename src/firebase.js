import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKJFArSf60IZ3_lvo__QTlGqjywJe0jZY",
  authDomain: "algotest-assignment.firebaseapp.com",
  projectId: "algotest-assignment",
  storageBucket: "algotest-assignment.appspot.com",
  messagingSenderId: "125009974972",
  appId: "1:125009974972:web:e1984d5f957a91ab02a2b9",
  measurementId: "G-B9477RBFQ0"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}