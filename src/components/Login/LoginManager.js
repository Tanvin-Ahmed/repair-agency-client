import { initializeApp } from "firebase/app";
import "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import firebaseConfig from "./firebase.config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const firebaseCreateUserWithEmailAndPassword = async (
  name,
  email,
  password
) => {
  try {
    const userCredential = createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const newUserInfo = { ...user };
    newUserInfo.displayName = name;
    newUserInfo.error = "";
    newUserInfo.success = true;
    await updateUserProfile(name);
    return newUserInfo;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const newUserInfo = {};
    newUserInfo.success = false;
    newUserInfo.error = errorMessage;
    return newUserInfo;
  }
};

export const firebaseSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const newUserInfo = { ...user };
    newUserInfo.error = "";
    newUserInfo.success = true;
    return newUserInfo;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const newUserInfo = {};
    newUserInfo.success = false;
    newUserInfo.error = errorMessage;
    return newUserInfo;
  }
};

const updateUserProfile = async (name) => {
  try {
    await updateProfile({ displayName: name });
    console.log("Profile Updated.");
  } catch (error) {
    console.log("Profile Update Error : ", error);
  }
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const newUserInfo = { ...user };
    newUserInfo.error = "";
    newUserInfo.success = true;
    return newUserInfo;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
    const newUserInfo = {};
    newUserInfo.success = false;
    newUserInfo.error = errorMessage;
    return newUserInfo;
  }
};

export const firebaseSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("LogOut error : ", error);
  }
};
