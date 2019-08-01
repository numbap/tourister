import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBQNG2L2HC04qPCOYHZ3cJvOGA5DDRCU98",
    authDomain: "tourister-30ccd.firebaseapp.com",
    databaseURL: "https://tourister-30ccd.firebaseio.com",
    projectId: "tourister-30ccd",
    storageBucket: "tourister-30ccd.appspot.com",
    messagingSenderId: "324526023160",
    appId: "1:324526023160:web:72d371116c87e287"
  };


  firebase.initializeApp(config);

  const database = firebase.database()

  export { firebase, database as default}  