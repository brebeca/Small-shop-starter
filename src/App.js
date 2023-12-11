import "./App.css";
import "./Menu.css";
import Cart from "./Cart";
import Filters from "./Filters";
import Product from "./Product";
import NavBar from "./NavBar";

// 1. Impartim in componente
// 2. Generam produsele cu map
// 3. Luam produsele din api cu useEffect: https://fakestoreapi.com/products

function App() {
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

          <div className="prod-grid">
            <Product
              img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
              price="109.95"
              rating="3.9"
            />
            <Product
              img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              title="Mens Casual Premium Slim Fit T-Shirts"
              price="22.95"
              rating="2.9"
            />
            <Product
              img="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              title="Mens Cotton Jacket"
              price="22.95"
              rating="2.9"
            />
          </div>
        </div>

        <Cart />
      </div>
    </>
  );
}

export default App;
