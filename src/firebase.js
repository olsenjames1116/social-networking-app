import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'moviereviews-dd11d.firebaseapp.com',
  projectId: 'moviereviews-dd11d',
  storageBucket: 'moviereviews-dd11d.appspot.com',
  messagingSenderId: '639241303665',
  appId: '1:639241303665:web:b68d5201b133fd5b88cdd0',
  measurementId: 'G-WS0S0F5R2M'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export { auth, provider, db };
