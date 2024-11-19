import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // User Registration
  const createNewUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Login
  const userLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  //Update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Value
  const userInfo = {
    user,
    setUser,
    createNewUser,
    logout,
    userLogin,
    loader,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
