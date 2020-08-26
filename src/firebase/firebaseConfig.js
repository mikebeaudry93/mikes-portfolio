import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import Axios from "axios";

let config = {
  apiKey: "AIzaSyA44p75ZwdDELJFvHEbNE8gahc3HEGbzUU",
  authDomain: "mikes-portfolio.firebaseapp.com",
  databaseURL: "https://mikes-portfolio.firebaseio.com",
  projectId: "mikes-portfolio",
  storageBucket: "mikes-portfolio.appspot.com",
  messagingSenderId: "474006976710",
  appId: "1:474006976710:web:5b62365836db3a1d0d3fc7",
  measurementId: "G-GX35QSNT32",
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { Axios, db };
