import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyBn8_PG3lhSJZrlizQB1jFOb0vI1YupZow",
  authDomain: "invest-new-95345.firebaseapp.com",
  databaseURL: "https://invest-new-95345-default-rtdb.firebaseio.com",
  projectId: "invest-new-95345",
  storageBucket: "invest-new-95345.appspot.com",
  messagingSenderId: "980214003322",
  appId: "1:980214003322:web:7889f4d557ce93bcd22dc3"
};
// Initialize Firebase
var firebaseDb=firebase.initializeApp(firebaseConfig);
 
export default firebaseDb