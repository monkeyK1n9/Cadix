// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZSLEHaiZWKIWrzKDkapAhUP2MtID5qmE",
  authDomain: "cadix-a8389.firebaseapp.com",
  projectId: "cadix-a8389",
  storageBucket: "cadix-a8389.appspot.com",
  messagingSenderId: "919296052932",
  appId: "1:919296052932:web:5ec5d89af81af546b44391",
  measurementId: "G-4K5XLBC5NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export {app, storage}