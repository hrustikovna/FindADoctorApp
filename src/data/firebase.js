import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyMd_GEgoXBdaO9Vke2Wd0omrADqXsVUc",
  authDomain: "findadoctorapp-8cd3b.firebaseapp.com",
  projectId: "findadoctorapp-8cd3b",
  storageBucket: "findadoctorapp-8cd3b.appspot.com",
  messagingSenderId: "999227598627",
  appId: "1:999227598627:web:1eab2e49b1607aaa9c4e96"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);