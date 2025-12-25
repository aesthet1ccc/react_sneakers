function Drawer({
  onClose,
  onRemove,
  items = [
    [
      {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 12999,
        imageUrl: "img/sneakers/1.jpg",
      },
      {
        title: "Кроссовки Puma X Aka Boku Future Rider",
        price: 8999,
        imageUrl: "img/sneakers/4.jpg",
      },
      {
        title: "Мужские Кроссовки Nike Kyrie 7",
        price: 11299,
        imageUrl: "img/sneakers/6.jpg",
      },
    ],
  ],
}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{""}
          <img
            onClick={onClose}
            className="cu-p"
            src="img/btn_remove.svg"
            alt="close"
          />
        </h2>
        {items.length > 0 ? (
          <div className="items">
            <div>
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5"> {obj.title}</p>
                    <b> {obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className=" remove_btn "
                    src="img/btn_remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex ">
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li className="d-flex ">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex flex-column align-center flex justify-center">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="./img/cart-empty.jpg"
              alt="empty cart"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="img/arrow.svg" alt="arrow" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Drawer;
