
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB19y5I9W1jtjCKHBtN1X5on7W5KfcRedE",
  authDomain: "react-project-90154.firebaseapp.com",
  projectId: "react-project-90154",
  storageBucket: "react-project-90154.firebasestorage.app",
  messagingSenderId: "260547524628",
  appId: "1:260547524628:web:e24dd3aad4ccc70528cf01",
  measurementId: "G-KC2PB5DTQM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

