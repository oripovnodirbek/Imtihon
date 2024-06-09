// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "random-unique-string",
    authDomain: "your-projectId.firebaseapp.com",
    databaseURL: "https://your-projectId.firebaseio.com",
    projectId: "your-projectId",
    storageBucket: "your-projectId.appspot.com",
    messagingSenderId: "random-unique-string",
    appId: "random-unique-string",
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
