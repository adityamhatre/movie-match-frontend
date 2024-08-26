import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../store/slices/loggedInSlice";
import AppServer from "../utils/appServer";

const provider = new GoogleAuthProvider();

const AuthComponent = () => {
  const dispatch = useDispatch();
  const appServer = new AppServer();
  const isLoggedIn = useSelector((state) => state.loggedIn.value);

  const signInOrRegister = () => {
    const auth = getAuth();
    if (isLoggedIn) {
      return;
    }

    signInWithPopup(auth, provider)
      .then((result) => {
        const { uid, email, displayName } = result.user;
        dispatch(setLoggedIn({ uid, email, displayName }));
        setTimeout(() => {
          appServer.registerUser({ uid, email, displayName });
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h1>Movie match</h1>
      <button onClick={signInOrRegister}>Sign in with Google</button>
    </div>
  );
};

export default AuthComponent;
