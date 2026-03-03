import { useContext } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function Card(props) {
  const { card, onCardClick, onCardLike, onCardDelete } = props;
  const { name, link } = card;

  const { currentUser } = useContext(CurrentUserContext);

  const isLiked = card.isLiked;
  const isOwn = card.owner?._id === currentUser._id || false;

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  }`;

  function handleImageClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={handleImageClick}
      />

      <button
        aria-label="Excluir cartão"
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      />

      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botão de curtir"
          className={cardLikeButtonClassName}
          type="button"
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}
