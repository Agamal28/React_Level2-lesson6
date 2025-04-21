import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {auth} from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";

const Html = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      navigate("/")
    }
  })
  return (
    <>
      <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <MainContent pageName="HTML Page" />
      <Footer />
    </>
  );
};

export default Html;
