export default function Card() {
  const { name, link, isLiked } = PaymentResponse.card;
  return (
    <li className="card">
      <img class="card__image" src={link} alt="" />
      <button
        aria-label="Excluir cartão"
        className="card__delete-button"
        type="button"
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botão de curtir"
          className="card__like-button"
          type="button"
        ></button>
      </div>
    </li>
  );
}
