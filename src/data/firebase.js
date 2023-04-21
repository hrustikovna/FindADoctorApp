import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGfO12Ki0UqnL04HabrddtAZArkeFglCA",
  authDomain: "hrustikovna-rateadoctorapp.firebaseapp.com",
  projectId: "hrustikovna-rateadoctorapp",
  storageBucket: "hrustikovna-rateadoctorapp.appspot.com",
  messagingSenderId: "856293726540",
  appId: "1:856293726540:web:084f1d85327b6c137457e9"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);