import firebase from "firebase";

export const firebaseConfig = {
  apiKey: process.env.React_App_api_key,
  authDomain: "campus-app-1640c.firebaseapp.com",
  projectId: "campus-app-1640c",
  storageBucket: "campus-app-1640c.appspot.com",
  messagingSenderId: "245215847675",
  appId: process.env.React_App_app_id,
  measurementId: "G-HZY97F3T8S",
};
 

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
