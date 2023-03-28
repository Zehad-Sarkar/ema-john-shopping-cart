import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Product = (props) => {
  // console.log(props.product);
  const { id, img, name, price, ratings, seller, stock } = props.product;
  const handleAddToCart = props.handleCart;

  return (
    <div className="product border-2 border-primary m-2 rounded-md p-2 relative">
      <img className="rounded-md" src={img} alt="image not found" />
      <div>
        <div className="text-left mt-2 mb-12">
          <h5>{name.substring(0, 30)}</h5>
          <h4>Price: ${price}</h4>
          <h5>Manufacturer: {seller}</h5>
          <p>Rating: {ratings} star</p>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-warning  w-full absolute bottom-0 left-0"
      >
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
