import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {auth} from '../firebase/config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [hasError , sethasError] = useState(false);
  const [firebaseError , setfirebaseError] = useState("");
  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <p style={{ fontSize: "23px", marginBottom: "22px" }}>Create a new account <span>🧡</span> </p>
          <input onChange={(eo) => {
            setEmail(eo.target.value)
          }} required  placeholder=" E-mail : "  type="email" />
          <input onChange={(eo) => {
            setPassword(eo.target.value)
          }} required placeholder=" Password : " type="password" />
          <button onClick={(eo) => {
            eo.preventDefault()
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              navigate("/");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              switch (errorCode) {
                case "auth/invalid-email":
                  setfirebaseError("Wrong Email")
                  break;
                case "auth/user-not-found":
                  setfirebaseError("Wrong Email")
                  break;
                case "auth/wrong-password":
                  setfirebaseError("Wrong password")
                  break;
                case "auth/too-many-requests":
                  setfirebaseError("too many requests, please try again later")
                  break;
                default:
                  setfirebaseError("please check your email & password ")
                  break;
              }

              // ..
            });
          }}>Sign up</button>
          <p className="account">
          Already hava an account <Link to="/signin"> Sign-in</Link>
          </p>
          {hasError && <h2>{firebaseError}</h2>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
