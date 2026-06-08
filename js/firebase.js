import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDs_QD0INbNq-xxr921aVFISNG3NGPSISA",
  authDomain: "peak-transformation.firebaseapp.com",
  projectId: "peak-transformation",
  storageBucket: "peak-transformation.firebasestorage.app",
  messagingSenderId: "1041049929257",
  appId: "1:1041049929257:web:3341db8248cb3f153e7e38",
  measurementId: "G-CWMD762R1E"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);