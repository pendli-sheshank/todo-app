// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDprfLk4W5c8wpbp0LFkWAiESiHEnzkQGU",
    authDomain: "todo-app-64fc5.firebaseapp.com",
    projectId: "todo-app-64fc5",
    storageBucket: "todo-app-64fc5.appspot.com",
    messagingSenderId: "150871074046",
    appId: "1:150871074046:web:863fff68c9792a317431af",
    measurementId: "G-43KJE35JZ6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db }