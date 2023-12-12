import "./App.css";
import "./Menu.css";
import Cart from "./Cart";
import Filters from "./Filters";
import Product from "./Product";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function App() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response2) => setProd(response2))
      .catch((err) => console.log(err));
  }, []);

  const products = prod.map((product) => {
    return (
      <Product
        key={product.image}
        img={product.image}
        title={product.title}
        price={product.price}
        rating={product.rating.rate}
      />
    );
  });

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <Filters products={prod} />

        <div>
          <h1>Products</h1>
          <div className="found">
            <p>3 products for selected category</p>
          </div>

          <div className="prod-grid">{products}</div>
        </div>

        <Cart />
      </div>
    </>
  );
}

export default App;
