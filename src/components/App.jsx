import { useState, useEffect } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";
import { login, register, checkToken } from "../utils/auth";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // verifica token salvo ao carregar a página
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch(() => localStorage.removeItem("jwt"));
    }
  }, []);

  // busca dados apenas quando logado
  useEffect(() => {
    if (!isLoggedIn) return;

    api
      .getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch((err) => console.error(err));

    api
      .getInitialCards()
      .then((cardsData) => setCards(cardsData))
      .catch((err) => console.error(err));
  }, [isLoggedIn]);

  function handleLogin({ email, password }) {
    login({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
      })
      .catch((err) => console.error("Erro no login:", err));
  }

  function handleRegister({ email, password }) {
    register({ email, password })
      .then(() => handleLogin({ email, password }))
      .catch((err) => console.error("Erro no registro:", err));
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    setCards([]);
  }

  const handleUpdateUser = (data) => {
    api
      .setUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((err) => console.error(err));
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const onUpdateAvatar = (data) => {
    api
      .setUserAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((err) => console.error(err));
  };

  function handleCardLike(card) {
    api
      .changeLikeCardStatus(card._id, !card.isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((err) => console.error(err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id),
        );
      })
      .catch((err) => console.error(err));
  }

  const handleAddPlaceSubmit = (newCard) => {
    api
      .addCard(newCard)
      .then((cardData) => {
        setCards([cardData, ...cards]);
        handleClosePopup();
      })
      .catch((err) => console.error(err));
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        onUpdateAvatar,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Main
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onRegister={handleRegister}
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
          popup={popup}
          onUpdateAvatar={onUpdateAvatar}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
