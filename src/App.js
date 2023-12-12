import "./App.css";
import "./Menu.css";
import Cart from "./Cart";
import Filters from "./Filters";
import Product from "./Product";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

// 1. Impartim in componente
// 2. Generam produsele cu map
// 3. Luam produsele din api cu useEffect: https://fakestoreapi.com/products

function App() {
  const [prod, setProd] = useState([]);
  const [cartItems, setcartItems] = useState(0)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response2) => setProd(response2));
  }, []);

  const products = prod.map((product) => {
    return (
      <Product
        key={product.image}
        img={product.image}
        title={product.title}
        price={product.price}
        rating={product.rating.rate}
        cartItems = {cartItems}
        setcartItems = {setcartItems}
      />
    );
  });

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <Filters
          products={[
            { category: "category1" },
            { category: "category2" },
            { category: "category3" },
            { category: "category4" },
            { category: "category5" },
          ]}
        />

        <div>
          <h1>Products</h1>
          <div className="found">
            <p>3 products for selected category</p>
          </div>

          <div className="prod-grid">{products}</div>
        </div>

        <Cart cartItems={cartItems}/>
      </div>
    </>
  );
}

export default App;
