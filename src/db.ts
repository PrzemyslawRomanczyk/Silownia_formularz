import * as firebase from 'firebase';
import {firebaseConfig} from './firebase.config';

// Get a Firestore instance
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
