import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

//event handler
    const handleAddToCart = (product) => {
      const newCart = [...cart, product]
      setCart(newCart)
    
    };

  return (
    <>
      <div className="shop-container mt-4 grid lg:grid-cols-5">
        <div className="product-container col-span-4 grid md:grid-cols-2 lg:grid-cols-3 ">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              handleCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="order-summery p-2 m-2">
          <h2 className="text-center font-bold text-white underline">
            Order Summery
          </h2>

          <h5>Selected-Item: {cart.length}</h5>
          <h6>Price:</h6>
        </div>
      </div>
    </>
  );
};

export default Shop;
