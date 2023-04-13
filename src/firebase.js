// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCAblQYEa3NzfNbgSmp1gJWR-ijqMMr64U',
  authDomain: 'moviereviews-dd11d.firebaseapp.com',
  projectId: 'moviereviews-dd11d',
  storageBucket: 'moviereviews-dd11d.appspot.com',
  messagingSenderId: '639241303665',
  appId: '1:639241303665:web:b68d5201b133fd5b88cdd0',
  measurementId: 'G-WS0S0F5R2M'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
