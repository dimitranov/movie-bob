// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB82sHSgAFvXOV910ZQfQLbJSMKp2PM-3Y",
    authDomain: "moviebob-2aa6e.firebaseapp.com",
    databaseURL: "https://moviebob-2aa6e.firebaseio.com",
    projectId: "moviebob-2aa6e",
    storageBucket: "moviebob-2aa6e.appspot.com",
    messagingSenderId: "66206003248",
    appId: "1:66206003248:web:a476743044a57986137df5"
};

firebase.initializeApp(firebaseConfig);

export const FB_db = firebase.database().ref();
export const FB_auth = firebase.auth;
