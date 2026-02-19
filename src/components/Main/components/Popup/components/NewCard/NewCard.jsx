export default function NewCard() {
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="2"
          name="card-name"
          placeholder="Título"
          required
          type="text"
          aria-describedby="new-card-title-error"
        />
        <span
          className="popup__input-error"
          id="new-card-title-error"
          aria-live="polite"
        ></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="new-card-link"
          name="link"
          placeholder="Link da Imagem"
          required
          type="url"
          aria-describedby="new-card-link-error"
        />
        <span
          className="popup__input-error"
          id="new-card-link-error"
          aria-live="polite"
        ></span>
      </label>

      <button className="button popup__button" type="submit" disabled>
        Criar
      </button>
    </form>
  );
}
