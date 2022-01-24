import * as firebase from "firebase";
import { firebaseConfig } from "./firebase.config";

// Get a Firestore instance
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
const usersCollection = db.collection("users");

export const createUser = (user: firebase.firestore.DocumentData) => {
  return usersCollection.add(user);
};

export const getUser = async (id: string | undefined) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (
  id: string | undefined,
  user: firebase.firestore.UpdateData
) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id: string | undefined) => {
  return usersCollection.doc(id).delete();
};
