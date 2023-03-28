import React from "react";

const CartSummery = ({ cart }) => {
  let totalPrice = 0;
  let totalShippingCharge = 0;
  let quantity = 0;
  for (const product of cart) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price*product.quantity;
    totalShippingCharge = totalShippingCharge + product.shipping;
    quantity = quantity + product.quantity;
    // console.log(product);
  }
  const tax = totalPrice * 7 / 100;
  const grandTotal = totalPrice + totalShippingCharge + tax;

  return (
    <div className="bg-warning text-black p-2 sticky top-0 rounded-md">
      <h2 className="text-center font-bold underline">
        Order Summery
      </h2>

      <h4>Selected-Item: {quantity}</h4>
      <h5>Total Price: $ {totalPrice}</h5>
      <h5>total Shipping charge: $ {totalShippingCharge}</h5>
      <h5>Tax: $ {tax.toFixed(2)}</h5>
      <h5>Grand Total: $ {grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default CartSummery;
