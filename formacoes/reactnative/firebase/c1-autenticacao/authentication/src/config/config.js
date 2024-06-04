// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence, browserSessionPersistence, browserLocalPersistence} from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const configFirebase = process.env

const firebaseConfig = {
  apiKey: configFirebase.EXPO_PUBLIC_API_KEY,
  authDomain: configFirebase.EXPO_PUBLIC_AUTHDOMAIN,
  projectId: configFirebase.EXPO_PUBLIC_PROJECTID,
  storageBucket: configFirebase.EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId: configFirebase.EXPO_PUBLIC_MESSAGINSENDERID,
  appId: configFirebase.EXPO_PUBLIC_APPID,
  measurementId: configFirebase.EXPO_PUBLIC_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export {auth}