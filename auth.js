// auth.js
import { auth } from "./firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("User registered successfully!");
  } catch (error) {
    console.error("Error registering user:", error);
    alert("Error registering user: " + error.message);
  }
});

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("User logged in successfully!");
    window.location.href = "admin.html";
  } catch (error) {
    console.error("Error logging in user:", error);
    alert("Error logging in user: " + error.message);
  }
});
