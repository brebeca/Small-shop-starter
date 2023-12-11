import "./App.css";
import "./Menu.css";
import Cart from "./Cart";
import Filters from "./Filters";

// 1. Impartim in componente
// 2. Generam produsele cu map
// 3. Luam produsele din api cu useEffect: https://fakestoreapi.com/products

function App() {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <ul className="list">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">All products</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        {/* <button class="search">Search</button> */}
      </nav>
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
          <div className="prod-grid">
            <div className="prod-container">
              <img
                className="prod-img"
                src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                alt={"img"}
              />
              <p className="prod-title">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
              </p>
              <div className="price-container">
                <p>
                  <small>$</small>
                  <b>{109.95}</b>
                </p>
                <p style={{ color: "gray" }}>
                  <small>rating: </small>
                  <b>{3.9}</b>
                </p>
              </div>
              {/* add to redux state */}
              <button className="add-btn">Add to cart</button>
              {/* <button className="remove-btn">Already in cart</button> */}
            </div>
            <div className="prod-container">
              <img
                className="prod-img"
                src={
                  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                }
                alt={"img"}
              />
              <p className="prod-title">
                Mens Casual Premium Slim Fit T-Shirts
              </p>
              <div className="price-container">
                <p>
                  <small>$</small>
                  <b>{22.95}</b>
                </p>
                <p style={{ color: "gray" }}>
                  <small>rating: </small>
                  <b>{2.9}</b>
                </p>
              </div>
              {/* add to redux state */}
              <button className="add-btn">Add to cart</button>
              {/* <button className="remove-btn">Already in cart</button> */}
            </div>
            <div className="prod-container">
              <img
                className="prod-img"
                src={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}
                alt={"img"}
              />
              <p className="prod-title">Mens Cotton Jacket</p>
              <div className="price-container">
                <p>
                  <small>$</small>
                  <b>{22.95}</b>
                </p>
                <p style={{ color: "gray" }}>
                  <small>rating: </small>
                  <b>{2.9}</b>
                </p>
              </div>
              {/* add to redux state */}
              <button className="add-btn">Add to cart</button>
              {/* <button className="remove-btn">Already in cart</button> */}
            </div>
          </div>
        </div>

        <Cart />
      </div>
    </>
  );
}

export default App;
