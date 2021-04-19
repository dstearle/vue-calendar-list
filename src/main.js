import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDqvDBZhWIC4mPRjo0soLd-7EbWhHnBTj0",
    authDomain: "lbs-main-floor-calendar.firebaseapp.com",
    projectId: "lbs-main-floor-calendar",
    storageBucket: "lbs-main-floor-calendar.appspot.com",
    messagingSenderId: "74944315304",
    appId: "1:74944315304:web:6b0af48a52a74f9a14679d"
});

export const db = firebase.firestore();

createApp(App).mount('#app')
