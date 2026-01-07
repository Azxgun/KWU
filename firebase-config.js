// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkPEwYp-D2r8J6URe84EgXTJiX_GKSfIk",
  authDomain: "project--abs.firebaseapp.com",
  projectId: "project--abs",
  storageBucket: "project--abs.firebasestorage.app",
  messagingSenderId: "73084003284",
  appId: "1:73084003284:web:9b2745817bf5dfefe42c41",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  query,
  where,
};
