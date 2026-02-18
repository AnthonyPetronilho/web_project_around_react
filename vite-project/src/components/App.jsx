import { useState } from "react";
// import "..index.css";

import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />

        {/* <div class="popup" id="edit-popup">
          <div class="popup__content">
            <button
              aria-label="Fechar pop-up"
              class="popup__close"
              type="button"
            ></button>
            <h3 class="popup__title">Editar perfil</h3>
            <form class="popup__form" id="edit-profile-form" novalidate>
              <label class="popup__field">
                <input
                  class="popup__input popup__input_type_name"
                  id="edit-name"
                  name="name"
                  placeholder="Nome"
                  type="text"
                  required
                  minlength="2"
                  maxlength="40"
                  aria-describedby="edit-name-error"
                />
                <span
                  class="popup__input-error"
                  id="edit-name-error"
                  aria-live="polite"
                ></span>
              </label>

              <label class="popup__field">
                <input
                  class="popup__input popup__input_type_description"
                  id="edit-about"
                  name="description"
                  placeholder="Sobre mim"
                  type="text"
                  required
                  minlength="2"
                  maxlength="200"
                  aria-describedby="edit-about-error"
                />
                <span
                  class="popup__input-error"
                  id="edit-about-error"
                  aria-live="polite"
                ></span>
              </label>

              <button class="button popup__button" type="submit" disabled>
                Salvar
              </button>
            </form>
          </div>
        </div>

        <div class="popup" id="new-card-popup">
          <div class="popup__content">
            <button
              aria-label="Fechar pop-up"
              class="popup__close"
              type="button"
            ></button>
            <h3 class="popup__title">Novo local</h3>
            <form class="popup__form" id="new-card-form">
              <label class="popup__field">
                <input
                  class="popup__input popup__input_type_card-name"
                  id="new-card-title"
                  name="place-name"
                  placeholder="Título"
                  type="text"
                  required
                  minlength="2"
                  maxlength="30"
                  aria-describedby="new-card-title-error"
                />
                <span
                  class="popup__input-error"
                  id="new-card-title-error"
                  aria-live="polite"
                ></span>
              </label>

              <label class="popup__field">
                <input
                  class="popup__input popup__input_type_url"
                  id="new-card-link"
                  name="link"
                  placeholder="Link de Imagem"
                  type="url"
                  required
                  aria-describedby="new-card-link-error"
                />
                <span
                  class="popup__input-error"
                  id="new-card-link-error"
                  aria-live="polite"
                ></span>
              </label>

              <button class="button popup__button" type="submit" disabled>
                Criar
              </button>
            </form>
          </div>
        </div>

        <div class="popup" id="image-popup">
          <div class="popup__content popup__content_content_image">
            <button
              aria-label="Fechar pop-up"
              class="popup__close"
              type="button"
            ></button>
            <img alt="" class="popup__image" src="#" />
            <p class="popup__caption"></p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
