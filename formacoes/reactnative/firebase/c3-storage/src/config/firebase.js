import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
};


// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

export { db };