import React, { useContext, useState } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setDescription(currentUser.about || "");
    }
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          id="edit-name"
          maxLength="40"
          minLength="2"
          name="name"
          placeholder="Nome"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-describedby="edit-name-error"
        />
        <span
          className="popup__input-error"
          id="edit-name-error"
          aria-live="polite"
        ></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          id="edit-about"
          maxLength="200"
          minLength="2"
          name="about"
          placeholder="Sobre mim"
          required
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-describedby="edit-about-error"
        />
        <span
          className="popup__input-error"
          id="edit-about-error"
          aria-live="polite"
        ></span>
      </label>

      <button className="button popup__button" type="submit" disabled>
        Salvar
      </button>
    </form>
  );
}
