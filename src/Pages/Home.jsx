import React, { useEffect } from "react";
import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Loader from "../components/common/Loader";
const Home = () => {

  useEffect(() => {
    let navigate = useNavigate();
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } 
    });
  }, []);
  return (
    <HomeComponent />
  )
}

export default Home;