import * as firebase from "firebase/app";

import "firebase/analytics";
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

// export const FB_db = firebase.database().ref();
export const FB_auth = firebase.auth;

