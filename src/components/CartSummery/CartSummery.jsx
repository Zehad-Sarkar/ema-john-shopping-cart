import React from "react";

const CartSummery = ({ cart }) => {
  let totalPrice = 0;
  let totalShippingCharge = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShippingCharge = totalShippingCharge + product.shipping;
    console.log(product);
  }
  const tax = totalPrice * 7 / 100;
  const grandTotal = totalPrice + totalShippingCharge + tax;

  return (
    <div>
      <h2 className="text-center font-bold text-white underline">
        Order Summery
      </h2>

      <h5>Selected-Item: {cart.length}</h5>
      <h6>Total Price: ${totalPrice}</h6>
      <h6>total Shipping charge: ${totalShippingCharge}</h6>
      <h6>Tax: ${tax.toFixed(2)}</h6>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default CartSummery;
