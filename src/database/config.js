import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAH5UqeRHfJA1Zuo-OIQkPViCJl2f2u5os",
  authDomain: "photogram-5358f.firebaseapp.com",
  databaseURL: "https://photogram-5358f-default-rtdb.firebaseio.com",
  projectId: "photogram-5358f",
  storageBucket: "photogram-5358f.appspot.com",
  messagingSenderId: "1079734770838",
  appId: "1:1079734770838:web:d802446fcee6ac0ccb36b7",
  measurementId: "G-CPDPHFSCXP",
};
// Initialize Firebase
firebase.initializeApp(config);
const data = firebase.database();
export { data };
