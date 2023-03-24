// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArzB0J5a5kFF56wi07I4rmHkLTU6Qcz-o",
  authDomain: "raaresults.firebaseapp.com",
  databaseURL: "https://raaresults-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "raaresults",
  storageBucket: "raaresults.appspot.com",
  messagingSenderId: "839015394886",
  appId: "1:839015394886:web:1cae38f1c2c17e49062447",
  measurementId: "G-1ZPCEHQH0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//const database = getDatabase();


function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

writeUserData("andreawu","awu","myemail@me.com","myimageurl");