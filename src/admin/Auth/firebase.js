// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "pphm-85de7.firebaseapp.com",
    projectId: "pphm-85de7",
    storageBucket: "pphm-85de7.appspot.com",
    messagingSenderId: "942705757202",
    appId: "1:942705757202:web:b0dad9e0241ca35e8f1ccb",
    measurementId: "G-SHVG6MML2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const logout = () => {
    signOut(auth);
}

export { auth, googleProvider, logout };
