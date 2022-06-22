import firebase from 'firebase'; 

var firebaseConfig = {
    apiKey: "AIzaSyBjasfEQZk2nHEvCQ59vE--t0_J0YbPZ5g",
    authDomain: "olympus-3927a.firebaseapp.com",
    projectId: "olympus-3927a",
    storageBucket: "olympus-3927a.appspot.com",
    messagingSenderId: "344069710062",
    appId: "1:344069710062:web:8a9a8627d2653ed5c713ff",
    measurementId: "G-3KY6CPV9GN"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig); 

var db = firebase.firestore(); 

export default db;