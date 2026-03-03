import { useState, useEffect } from "react";
import api from "../utils/api";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        console.log("Dados do usuário:", userData);
        setCurrentUser(userData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="page__content">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
