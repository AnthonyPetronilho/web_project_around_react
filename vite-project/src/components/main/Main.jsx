import avatar from "../../assets/images/avatar.jpg";

function Main() {
  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img className="profile__image" src={avatar} alt="Avatar" />
          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Editar foto do perfil"
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
          />
          <p className="profile__description">Explorador</p>
        </div>

        <button
          aria-label="Adicionar cartão"
          className="profile__add-button"
          type="button"
        />
      </section>

      <section className="cards page__section">
        <ul className="cards__list" />
      </section>
    </main>
  );
}

export default Main;
