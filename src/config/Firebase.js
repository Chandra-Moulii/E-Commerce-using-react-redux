// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3rmCOZz9tMbVkr1ytcwCAG9wSGwGCI9c",
  authDomain: "e-commerce-51249.firebaseapp.com",
  projectId: "e-commerce-51249",
  storageBucket: "e-commerce-51249.appspot.com",
  messagingSenderId: "549970343235",
  appId: "1:549970343235:web:b78d38f3589af681f56bf6",
  measurementId: "G-0LK2WLFJYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
