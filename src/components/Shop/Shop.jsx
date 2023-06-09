import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

import CartSummery from "../CartSummery/CartSummery";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // useEffect(() => {
  //   const storedCart = getShoppingCart();
  //   for (const id in products) {
  //     const addedProduct = products.find((product) => product.id === id);
  //     const quantity = storedCart[id];
  //     addedProduct.quantity = quantity;
  //   }
  // }, [products]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //step 1 for in loop on products to get id
    for (const id in storedCart) {
      //step 2 find product
      const addedProduct = products.find((product) => product.id === id);
      //step 3 get quantity
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  //event handler
  const handleAddToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exist];
    }

    setCart(newCart);
    addToDb(product.id);
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
          <CartSummery cart={cart}></CartSummery>
        </div>
      </div>
    </>
  );
};

export default Shop;
