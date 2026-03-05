import { useState, useEffect } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      await api
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.error("Erro ao buscar cartões:", err);
      });
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .setUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const onUpdateAvatar = (data) => {
    (async () => {
      await api
        .setUserAvatar(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id),
        );
      })
      .catch((error) => console.error(error));
  }

  const handleAddPlaceSubmit = (newCard) => {
    (async () => {
      await api
        .addCard(newCard)
        .then((cardData) => {
          setCards([cardData, ...cards]);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
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
        <Header />
        <Main
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
