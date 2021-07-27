import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAJ-T9bJdWhA4jIpcljvxc2SsftMUygwT0",
  authDomain: "campus-app-1640c.firebaseapp.com",
  databaseURL: "https://campus-app-1640c-default-rtdb.firebaseio.com",
  projectId: "campus-app-1640c",
  storageBucket: "campus-app-1640c.appspot.com",
  messagingSenderId: "245215847675",
  appId: "1:245215847675:web:ed435417eec31f3a4f3c5e",
  measurementId: "G-HZY97F3T8S"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database=firebase.database();
const Storage=firebase.storage();

export {auth,database,Storage,firebase};
