import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shoe.css";
const Shoe = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);

    const newPrice = price + product.price;
    setPrice(newPrice);

    const newShipping = shipping + product.shipping;
    setShipping(newShipping);
  };

  return (
    <div className="shoe">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleclick={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>order summury</h4>
        <p>Selected Items:{cart.length}</p>
        <p>Total Price:{price}</p>
        <p>Total Shipping Charge:{shipping}</p>
        <p>Tax:</p>
      </div>
    </div>
  );
};

export default Shoe;
