import React, { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Firebase/firebase.init';
import {
    getAuth,
   GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,
  
} from "firebase/auth";


initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  return { user, isLoading, signInUsingGoogle, logOut };
};

export default useFirebase;