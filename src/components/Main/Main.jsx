import avatar from "../../assets/images/avatar.jpg";
import { useContext } from "react";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import Card from "./components/Popup/components/Card/Card";
import ImagePopup from "./components/Popup/components/ImagePopup/ImagePopup";
import Popup from "./components/Popup/Popup";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({
  handleOpenPopup,
  handleClosePopup,
  popup,
  onCardDelete,
  onCardLike,
  cards,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup = {
    title: "Novo Cartão",
    children: <NewCard />,
  };

  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile onClose={handleClosePopup} />,
  };
  const editAvatarPopup = {
    title: "Editar Avatar",
    children: <EditAvatar />,
  };

  function handleCardClick(card) {
    const imagePopup = {
      title: null,
      isImage: true,
      children: <ImagePopup card={card} />,
    };
    handleOpenPopup(imagePopup);
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img
            className="profile__image"
            src={currentUser?.avatar || avatar}
            alt="Avatar"
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Editar foto do perfil"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__title">
            {currentUser?.name || "Carregando..."}
          </h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          />
          <p className="profile__description">
            {currentUser?.about || "Carregando..."}
          </p>
        </div>

        <button
          aria-label="Adicionar cartão"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          isOpen={true}
          isImage={popup.isImage}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
