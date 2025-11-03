import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpqXQWSQikvW8xvuOEvoOl6qAERy-yGbs",
  authDomain: "chicastec-happytails.firebaseapp.com",
  projectId: "chicastec-happytails",
  storageBucket: "chicastec-happytails.firebasestorage.app",
  messagingSenderId: "420709714965",
  appId: "1:420709714965:web:1e7e2d169f15d2cd26921c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;
export { db };
