import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDRcRXRJslbFduFBYbTNGRNNMXNzCZtiPs",
    authDomain: "recipemall.firebaseapp.com",
    databaseURL: "https://recipemall.firebaseio.com",
    projectId: "recipemall",
    storageBucket: "recipemall.appspot.com",
    messagingSenderId: "1019509900843",
    appId: "1:1019509900843:web:0f0c318b66f785544d8c6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase