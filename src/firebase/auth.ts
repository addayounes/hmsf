import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const LogIn = async () => {
    return signInWithPopup(auth, provider);
};

export const LogOut = async () => {
    return signOut(auth);
};
