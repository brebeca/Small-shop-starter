import { useState } from "react";
const Product = (props) => {
  const [disableBut, setdisableBut] = useState(false);
  return (
    <div className="prod-container">
      <img className="prod-img" src={props.img} alt={"img"} />
      <p className="prod-title">{props.title}</p>
      <div className="price-container">
        <p>
          <small>$</small>
          <b>{props.price}</b>
        </p>
        <p style={{ color: "gray" }}>
          <small>rating: </small>
          <b>{props.rating}</b>
        </p>
      </div>
      {/* add to redux state */}
      <button
        className="add-btn"
        disabled={disableBut}
        onClick={() => {
          props.setcartItems(props.cartItems + 1);
          setdisableBut(true);
        }}
      >
        Add to cart
      </button>
      {/* <button className="remove-btn">Already in cart</button> */}
    </div>
  );
};
export default Product;
