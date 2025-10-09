import styles from "./Card.module.scss";
import React from "react";

function Card({ title, price, imageUrl, onCLickFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const onClickPlus = () => {
    console.log(imageUrl);
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "img/liked.svg" : "img/unliked.svg"}
          alt="unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />

      <h5> {title}</h5>
      <div className="cardInfo">
        <div className="d-flex flex-column ">
          <p>цена:</p>
          <b>{price} руб.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn_checked.svg" : "/img/plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}
export default Card;
