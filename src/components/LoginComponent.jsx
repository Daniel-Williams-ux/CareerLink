import LoginApi from '../api/AuthApi';
import '../Sass/LoginComponent.scss';

const LoginComponent = () => {

  const login = () => {
    LoginApi();
  }
  return (
    <div>
      <h1>Login Component</h1>
      <button onClick={login}className="login-btn">Log in to CareerLinks</button>
  </div>
  )
}

export default LoginComponent;