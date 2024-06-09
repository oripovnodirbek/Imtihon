// admin.js
import { auth } from "./firebaseConfig.js";
import {
  signOut,
  onAuthStateChanged,
  getIdToken,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const dataArray = [];

document.getElementById("admin-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;

  const dataObject = {
    input1,
    input2,
    input3,
  };

  dataArray.push(dataObject);
  updateDataContainer();
  document.getElementById("admin-form").reset();
});

document.getElementById("logout-button").addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("User logged out successfully!");
    window.location.href = "auth.html";
  } catch (error) {
    console.error("Error logging out user:", error);
    alert("Error logging out user: " + error.message);
  }
});

const updateDataContainer = () => {
  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = "";
  dataArray.forEach((data, index) => {
    const dataDiv = document.createElement("div");
    dataDiv.innerHTML = `Data ${index + 1}: ${JSON.stringify(data)}`;
    dataContainer.appendChild(dataDiv);
  });
};

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const token = await getIdToken(user, true);
    document.getElementById("admin-message").innerText = `Welcome, ${user.email}! Your token: ${token}`;
  } else {
    window.location.href = "auth.html";
  }
});
