export default function EditAvatar() {
  return (
    <form className="popup__form" id="avatar-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type-url"
          id="avatar-link"
          name="avatar"
          placeholder="link da foto"
          required
          type="url"
          aria-describedby="avatar-link-erro"
        />
        <span
          className="popup__input-error"
          id="avatar-link-error"
          aria-live="polite"
        ></span>
      </label>

      <button className="button popup__button" type="submit" disabled>
        Salvar
      </button>
    </form>
  );
}
