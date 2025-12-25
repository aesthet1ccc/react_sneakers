import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import Card from "./components/Card";
import items_sneakers from "./assets/items_sneakers.json";

function App() {
  const [cartItems, setCartItems] = React.useState([
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
  ]);

  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const onAddToCart = (obj) => {
    setCartItems(obj);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="heading">
            {" "}
            {searchValue
              ? `Поиск по запросу: : "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img src="img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className=" clear cu-p remove_btn "
                src="img/btn_remove.svg"
                alt="clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap ml-40">
          {items_sneakers
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onClickFavorite={() => console.log("Добавили в закладки")}
                onPlus={() => console.log(onAddToCart(item))}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
