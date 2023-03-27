import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Product = (props) => {
  // console.log(props.product);
  const { id, img, name, price, ratings, seller, stock } = props.product;
  const handleAddToCart = props.handleCart;

  return (
    <div className="product border-2 border-primary m-2 rounded-md p-2 relative">
      <img className="rounded-md" src={img ? img : "no image"} alt="no image" />
      <div className="text-left mt-2">
        <h5 className="">{name}</h5>
        <h4>Price: ${price}</h4>
      </div>
      <div className="mt-4 text-left">
        <h5>Manufacturer: {seller}</h5>
        <p>Rating: {ratings} star</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-warning  w-full absolute mb-0"
      >
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button> 
   
    </div>
  );
};

export default Product;
