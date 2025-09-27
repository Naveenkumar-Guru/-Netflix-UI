// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // import { getAnalytics } from "firebase/analytics"; // no need no
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBpMAH7BojyKuIlP805BusjphVIYlRUJnw",
//   authDomain: "netflix-project-8457e.firebaseapp.com",
//   projectId: "netflix-project-8457e",
//   storageBucket: "netflix-project-8457e.firebasestorage.app",
//   messagingSenderId: "479544721163",
//   appId: "1:479544721163:web:8be684c6749459bbb8ac0e",
//   measurementId: "G-W287PV3VV6",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// export const firebaseAuth = getAuth(app);

// ===================================================================

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpMAH7BojyKuIlP805BusjphVIYlRUJnw",
  authDomain: "netflix-project-8457e.firebaseapp.com",
  projectId: "netflix-project-8457e",
  storageBucket: "netflix-project-8457e.firebasestorage.app",
  messagingSenderId: "479544721163",
  appId: "1:479544721163:web:8be684c6749459bbb8ac0e",
  measurementId: "G-W287PV3VV6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);