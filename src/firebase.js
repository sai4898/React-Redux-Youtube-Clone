import firebase from 'firebase/app'


import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAXG5nAHyX3hTewXM6okKf6gwJDtunfLqs",
    authDomain: "redux-4898.firebaseapp.com",
    projectId: "redux-4898",
    storageBucket: "redux-4898.appspot.com",
    messagingSenderId: "114695524803",
    appId: "1:114695524803:web:a0ea73bf988f7d06f9ad76"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()