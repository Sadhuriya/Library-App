import * as firebase from 'firebase'
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDUXsgrMDo5wHPHw7GXTXqnQkgXd2Ind5E",
    authDomain: "willy-21579.firebaseapp.com",
    databaseURL: "https://willy-21579.firebaseio.com",
    projectId: "willy-21579",
    storageBucket: "willy-21579.appspot.com",
    messagingSenderId: "576580543222",
    appId: "1:576580543222:web:054a13f95c649d6551c2d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
