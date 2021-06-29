import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAV5HwLv-_PwVnLm_LwB6KuVDYNnZZnOYs",
    authDomain: "whats-app-web-clone-d60aa.firebaseapp.com",
    projectId: "whats-app-web-clone-d60aa",
    storageBucket: "whats-app-web-clone-d60aa.appspot.com",
    messagingSenderId: "498974689765",
    appId: "1:498974689765:web:a3087d23c1d0f5d589470c",
    measurementId: "G-BGW7RYCD4E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
