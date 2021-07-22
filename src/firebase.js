// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDQazsw_mE0oNCSmma3qsELs2bBSFavdnY",
    authDomain: "linkdinclone-cra.firebaseapp.com",
    projectId: "linkdinclone-cra",
    storageBucket: "linkdinclone-cra.appspot.com",
    messagingSenderId: "289071395501",
    appId: "1:289071395501:web:b6b1847588ee01340f4c24",
    measurementId: "G-WRFR8WHNR7"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

const auth=firebase.auth();
  export{auth}
  export default db;