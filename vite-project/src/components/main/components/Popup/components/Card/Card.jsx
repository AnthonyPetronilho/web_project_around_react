export default function Card() {
  return (
    <li className="card">
      <img class="card__image" src="" alt="" />
      <button
        aria-label="Excluir cartão"
        className="card__delete-button"
        type="button"
      ></button>
      <div className="card__description">
        <h2 className="card__title"></h2>
        <button
          aria-label="Botão de curtir"
          className="card__like-button"
          type="button"
        ></button>
      </div>
    </li>
  );
}
