import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import { getDatabase , ref , set } from "@firebase/database";
// import  ref  from "@firebase/database";
// import  set  from "@firebase/database";



 
const firebaseConfig = {
  apiKey: "AIzaSyDUmY5RACnJlc0J05fRbOWiTsksvtcZFic",
  authDomain: "campus-recruitment-syste-eebb8.firebaseapp.com",
  databaseURL: "https://campus-recruitment-syste-eebb8-default-rtdb.firebaseio.com",
  projectId: "campus-recruitment-syste-eebb8",
  storageBucket: "campus-recruitment-syste-eebb8.appspot.com",
  messagingSenderId: "897237440900",
  appId: "1:897237440900:web:1013585c2b3990de7b65d1",
  measurementId: "G-RB5ZXX7WHD"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const database = getDatabase();
export const refer = ref;
export const setData = set;

