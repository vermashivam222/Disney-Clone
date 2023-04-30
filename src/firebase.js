import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBIsyPvfP2x8NdRubEp8LmQWAzx-HOig3U",
    authDomain: "disneyplus-clone-a7a1f.firebaseapp.com",
    projectId: "disneyplus-clone-a7a1f",
    storageBucket: "disneyplus-clone-a7a1f.appspot.com",
    messagingSenderId: "874248752213",
    appId: "1:874248752213:web:3780028bfa34843bb5d8dc"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();



  export { auth, provider, storage};
  export default db;
  
