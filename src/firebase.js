import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import{
  getFirestore
  } from 'firebase/firestore'
import { useState } from "react";

const app = firebase.initializeApp ({
  apiKey: "AIzaSyBw78EZLT7rAQMvuiRckZgw-3cRDKoJenU",
  authDomain: "ttgenerator-63408.firebaseapp.com",
  databaseURL: "https://ttgenerator-63408-default-rtdb.firebaseio.com",
  projectId: "ttgenerator-63408",
  storageBucket: "ttgenerator-63408.appspot.com",
  messagingSenderId: "967263071375",
  appId: "1:967263071375:web:eacc1e28f5f183742254fa"
});


// to save in firestore db //
export const db = getFirestore(); 


// Initialize Firebase
export const auth = getAuth(app);
export default app



