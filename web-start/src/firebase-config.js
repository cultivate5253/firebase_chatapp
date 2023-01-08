/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
};
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAu73LprGml132AwDEZttOF3TP4MF-Gd6s",
    authDomain: "friendlychat-3572b.firebaseapp.com",
    projectId: "friendlychat-3572b",
    storageBucket: "friendlychat-3572b.appspot.com",
    messagingSenderId: "901761133321",
    appId: "1:901761133321:web:8d2119fea8d570844d01d8",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}