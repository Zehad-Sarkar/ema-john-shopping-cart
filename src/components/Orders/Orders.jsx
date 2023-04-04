import React from 'react';
import CartSummery from '../CartSummery/CartSummery';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const cart = useLoaderData();
  console.log(cart);
  return (
    <div className="shop-container mt-4 grid lg:grid-cols-5">
      <div className="product-container col-span-4 grid md:grid-cols-2 lg:grid-cols-3">
        <h1>Order Page: {cart.length}</h1>
        <div className="grid">
          {cart.map((product) => (
            <ReviewItem product={product} key={product.id}></ReviewItem>
          ))}
        </div>
      </div>
      <div className="order-summery p-2 m-2">
        <CartSummery cart={cart}></CartSummery>
      </div>
    </div>
  );
};

export default Orders;