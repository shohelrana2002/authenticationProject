import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const auth = getAuth(app);
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const handleSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleSingIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleUpdateUser = (user, updateData) => {
    return updateProfile(user, updateData);
  };
  const handleSendEmailVerification = (currenUser) => {
    setLoading(true);
    return sendEmailVerification(currenUser);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      if (currenUser) {
        setUser(currenUser);
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);
  const handleSingOut = (auth) => {
    setLoading(true);
    return signOut(auth);
  };
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const info = {
    user,
    loading,
    setLoading,
    handleSignUp,
    handleGoogle,
    handleSingIn,
    resetPassword,
    handleSingOut,
    handleUpdateUser,
    handleSendEmailVerification,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
