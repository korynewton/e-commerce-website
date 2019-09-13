import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAXZ-XBWnrfI-dK74bt3UNE0devSOLP_Ek',
  authDomain: 'ecommerce-5df6e.firebaseapp.com',
  databaseURL: 'https://ecommerce-5df6e.firebaseio.com',
  projectId: 'ecommerce-5df6e',
  storageBucket: '',
  messagingSenderId: '648152802850',
  appId: '1:648152802850:web:2b04df3a25f8fd1041cc7b'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;