import { useState } from 'react';

import { RegisterAPI, GoogleSignInAPI } from '../api/AuthApi';
import GoogleButton from 'react-google-button'
import '../Sass/LoginComponent.scss';
import Logo from "../assets/careerLinks.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const RegisterComponent = () => {

  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({})
  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account created")
      navigate("/home")
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  }

   const googleSignIn = () => {
    let response = GoogleSignInAPI();
    navigate("/home");
  }
  return (
    
    <div className="login-wrapper">
      <img src={Logo} className="carrerLinkLogo" />

      <div className="auth-inputs">
        <h1 className="heading">Never miss your ride again: Track your bus in real-time with our convenient bus tracker.</h1>

        <div className="auth-form-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone number"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
             placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={register} className="login-btn">
          Agree & Join
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton  className="google-btn" onClick={googleSignIn} />
        <p className="go-to-signup">
          Already on CareerLink?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  )
}

export default RegisterComponent;