import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/config'
import {useState} from 'react'
import { useNavigate } from "react-router";


const Signin = () => {

  const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [hasError , sethasError] = useState(false);
    const [firebaseError , setfirebaseError] = useState("");

  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <input onChange={(eo) => {
            setEmail(eo.target.value)
          }} required placeholder=" E-mail : " type="email" />
          <input onChange={(eo) => {
            setPassword(eo.target.value)
          }} required placeholder=" Password : " type="password" />
          <button onClick={(eo) => {
            eo.preventDefault()
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              navigate("/");

              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              sethasError(true)
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
            });
          
          }}>Sign in</button>
          <p className="account">
            Don't hava an account <Link to="/signup"> Sign-up</Link>
          </p>


          {hasError && <h2>{firebaseError}</h2>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
