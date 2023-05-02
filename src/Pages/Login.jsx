import React, { useEffect } from "react";
import { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Loader from "../components/common/Loader";

export default function Home({ currentUser }) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <LoginComponent />;
}