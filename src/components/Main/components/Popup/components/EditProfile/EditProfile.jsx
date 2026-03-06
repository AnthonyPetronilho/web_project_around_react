import { useContext, useState } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const currentUser = useContext(CurrentUserContext);

  const { handleUpdateUser } = currentUser;

  const [name, setName] = useState(CurrentUserContext.name);
  const [description, setDescription] = useState(currentUser.about);
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({ name, about: description });
  };

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
          onChange={handleNameChange}
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
          onChange={handleDescriptionChange}
          aria-describedby="edit-about-error"
        />
        <span
          className="popup__input-error"
          id="edit-about-error"
          aria-live="polite"
        ></span>
      </label>

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
