import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC8TIVYfUTGvqWNq13rnHK-waRSTYZTzMw",
  authDomain: "lemonies-f40a0.firebaseapp.com",
  projectId: "lemonies-f40a0",
  storageBucket: "lemonies-f40a0.appspot.com",
  messagingSenderId: "766029477710",
  appId: "1:766029477710:web:8fbc3fed16d10599f3101f"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)