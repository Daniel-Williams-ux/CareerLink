import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../firebase";

const LoginApi = (email, password, createUserWithEmailAndPassword) => {
 try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
}

export default LoginApi;

export const RegisterAPI = (email, password) => {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};