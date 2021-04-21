import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Main Floor Firestore
firebase.initializeApp({
    apiKey: "AIzaSyDqvDBZhWIC4mPRjo0soLd-7EbWhHnBTj0",
    authDomain: "lbs-main-floor-calendar.firebaseapp.com",
    projectId: "lbs-main-floor-calendar",
    storageBucket: "lbs-main-floor-calendar.appspot.com",
    messagingSenderId: "74944315304",
    appId: "1:74944315304:web:6b0af48a52a74f9a14679d"
});

// Top Floor Firestore
// firebase.initializeApp({
//     apiKey: "AIzaSyDDkM5ScI1Hz3A2ttIa849-o0PFbJNNg3c",
//     authDomain: "lbs-top-floor-calendar.firebaseapp.com",
//     projectId: "lbs-top-floor-calendar",
//     storageBucket: "lbs-top-floor-calendar.appspot.com",
//     messagingSenderId: "90657387338",
//     appId: "1:90657387338:web:96c69d57a7c4ab96ad47b3"
// });

export const db = firebase.firestore();

createApp(App).mount('#vue-calendar-list-main')
