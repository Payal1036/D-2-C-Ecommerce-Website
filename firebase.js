import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCwGXNuv0fti4ORurQCAdbVLSfbLo8vkN0",
  authDomain: "house-of-gulaab.firebaseapp.com",
  projectId: "house-of-gulaab",
  storageBucket: "house-of-gulaab.firebasestorage.app",
  messagingSenderId: "69491204708",
  appId: "1:69491204708:web:6cdef1e4887f56caf8b571",
  measurementId: "G-5E4B28VNN7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("Firebase connected successfully");


// LOGIN CODE
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Login Successful!");
            console.log(userCredential.user);

        } catch (error) {
            alert(error.message);
        }
    });
}


// SIGNUP CODE
const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {
    signupBtn.addEventListener("click", async () => {
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Signup Successful!");
            console.log(userCredential.user);

        } catch (error) {
            alert(error.message);
        }
    });
}







