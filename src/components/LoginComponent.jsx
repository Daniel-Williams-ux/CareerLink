import { useState } from 'react';
import LoginApi from '../api/AuthApi';
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthApi';
import GoogleButton from 'react-google-button'
import '../Sass/LoginComponent.scss';
import Logo from "../assets/careerLinks.jpg";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {

  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({})
  const login = async () => {
    try {
      let res = await LoginApi(credentials.email, credentials.password);
      toast.success("You have successfully signed-in to CareerLink")
      return res
    } catch (err) {
      return err
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    navigate("/home")
  }
  return (
    
    <div className="login-wrapper">
      <img src={Logo} className="carrerLinkLogo" />

      <div className="auth-inputs">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Keep yourself informed about developments in your professional field.</p>

        <div className="auth-form-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton  className="google-btn" onClick={googleSignIn} />
        <p className="go-to-signup">
          New to CareerLink?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  )
}

export default LoginComponent;