import Card from "../components/Card";

function Home(
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCart
) {
  return (
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
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
}
export default Home;
