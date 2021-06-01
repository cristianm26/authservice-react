import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDglhnPPydoCXGKWs7-oo-yCSmlTf51yHo",
    authDomain: "crud-react-aa6b8.firebaseapp.com",
    projectId: "crud-react-aa6b8",
    storageBucket: "crud-react-aa6b8.appspot.com",
    messagingSenderId: "93569207368",
    appId: "1:93569207368:web:727bb9260b7ec13d13dc7d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export {
    firebase, db, googleAuthProvider
}