import avatar from "../images/avatar.jpg";

function Main() {
  return (
    <>
      <main class="content">
        <section class="profile page__section">
          <div class="profile__avatar-container">
            <img class="profile__image" src={avatar} alt="Avatar" />
            <button
              class="profile__avatar-edit-button"
              type="button"
              aria-label="Editar foto do perfil"
            ></button>
          </div>
          <div class="profile__info">
            <h1 class="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              class="profile__edit-button"
              type="button"
            ></button>
            <p class="profile__description">Explorador</p>
          </div>
          <button
            aria-label="Adicionar cartão"
            class="profile__add-button"
            type="button"
          ></button>
        </section>

        <section class="cards page__section">
          <ul class="cards__list"></ul>
        </section>

        <template id="card-template">
          <li class="card">
            <img class="card__image" src="" alt="" />
            <button
              aria-label="Excluir cartão"
              class="card__delete-button"
              type="button"
            ></button>
            <div class="card__description">
              <h2 class="card__title"></h2>
              <button
                aria-label="Botão de curtir"
                class="card__like-button"
                type="button"
              ></button>
            </div>
          </li>
        </template>
      </main>
    </>
  );
}

export default Main;
