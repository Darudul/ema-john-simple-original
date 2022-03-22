import {
  faCoffee,
  faShop,
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = (props) => {
  // console.log(props);
  const { handleclick } = props;
  // console.log(props.product);
  const { img, name, price, seller, ratings } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-name">
        <h4 className="test">{name}</h4>
        <div className="product-info">
          <p>Price:${price}</p>
          <p>Menufactrer:{seller}</p>
          <p className="pet">Rating:{ratings} start</p>
        </div>
      </div>
      <button onClick={() => handleclick(props.product)} className="btn">
        <p className="cart-style">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
