import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const avatarRef = useRef();
  const currentUser = useContext(CurrentUserContext);
  const { onUpdateAvatar } = currentUser;

  function handleAvatar(e) {
    e.preventDefault();

    onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <form
      className="popup__form"
      id="avatar-form"
      noValidate
      onSubmit={handleAvatar}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type-url"
          ref={avatarRef}
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

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
