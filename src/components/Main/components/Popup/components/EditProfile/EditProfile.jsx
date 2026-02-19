export default function EditProfile() {
  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
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
          aria-describedby="edit-about-error"
        />
        <span className="popup__input-error" id="edit-about-error"></span>
      </label>

      <button className="button popup__button" type="submit" disabled>
        Salvar
      </button>
    </form>
  );
}
