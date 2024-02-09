import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// now here the database from firestore part begins
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// here the getFirestore is to use the functionality of the firestore, the "doc" is to get the instance of the document,
// the "getDoc" is to get a particular document and the "setDoc" is to modify or set a particular document

const firebaseConfig = {
  apiKey: "AIzaSyAb7XlGl6b-hbkZhR4YfUfbW6sDmApnde4",
  authDomain: "e-com-web-9d471.firebaseapp.com",
  projectId: "e-com-web-9d471",
  storageBucket: "e-com-web-9d471.appspot.com",
  messagingSenderId: "830888301341",
  appId: "1:830888301341:web:41888c6b72a60e066f07f4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// now the remaining firestore db code begins, now here the "db" indicates the instance of the database in the firestore
// and we have to pass the db for multiple operations
export const db = getFirestore();

// now creating an exclusive method or function to create a user document from authorization

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef);

  // now to get the sanpshot or the data instance using the getDoc method we will do the following
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  // so now what we want is to check weather the user document referrence exists or not if not then we
  // need to set it and if it does then we will simply return it, so we will do the following

  // first we will extract the displayName and email keys from the userAuth object

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.messsage);
    }
  }

  // and now of course if the userDocRef or the referrence already exists then
  return userDocRef;

  // and with the code above the user that is logged in his/her data will get automatically saved in the firestore db
};
