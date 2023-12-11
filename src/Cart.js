import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-wrapper">
      <button className="cart">
        <div className="content">
          {/* display redux cart state */}
          <div className="quantity">0</div>
        </div>
      </button>
    </div>
  );
};
export default Cart;
