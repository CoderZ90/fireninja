import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDJuGKMBDfQMWD6nDeqauEivPQ2qkyCVgY",
    authDomain: "ninjachat-64f49.firebaseapp.com",
    projectId: "ninjachat-64f49",
    storageBucket: "ninjachat-64f49.appspot.com",
    messagingSenderId: "394344999697",
    appId: "1:394344999697:web:69999530b68d9eecc4fab0"
}).auth();