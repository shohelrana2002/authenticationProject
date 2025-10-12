import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const auth = getAuth(app);
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleSingIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleUpdateUser = (user, updateData) => {
    return updateProfile(user, updateData);
  };
  const handleSendEmailVerification = (currenUser) => {
    return sendEmailVerification(currenUser);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      if (currenUser) {
        setUser(currenUser);
        console.log(currenUser);
      }
    });
    return () => unSubscribe();
  }, []);
  const info = {
    user,
    handleSignUp,
    handleSingIn,
    handleUpdateUser,
    handleSendEmailVerification,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
