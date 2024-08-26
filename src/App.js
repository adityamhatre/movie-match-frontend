import { initializeApp } from "firebase/app";
import React from "react";
import { useSelector } from "react-redux";
import "./styles/App.css";
import AuthComponent from "./components/AuthComponent";
import UserPicker from "./components/UserPicker";

const firebaseConfig = {
  apiKey: "AIzaSyDnTxuD3pYiBUeVTg5sAzWPKlUSPsihXqQ",
  authDomain: "movie-match-d8493.firebaseapp.com",
  projectId: "movie-match-d8493",
  storageBucket: "movie-match-d8493.appspot.com",
  messagingSenderId: "1062647963530",
  appId: "1:1062647963530:web:d1063b8a53db8c07acb273",
  measurementId: "G-52DTLN4259",
};

initializeApp(firebaseConfig);

const App = () => {
  const isLoggedIn = useSelector((state) => state.loggedIn.value.uid);
  return (
    <div className="app">{isLoggedIn ? <UserPicker /> : <AuthComponent />}</div>
  );
};

export default App;
