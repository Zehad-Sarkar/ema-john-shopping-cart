import React from 'react';

const ReviewItem = ({ product }) => {
  const {id,img,name,price}=product
  return (
    <div className="flex border-2 p-2 m-4">
      <div className="flex">
        <img className="w-20 h-18 mr-2" src={img} alt="" />
        <div className="">
          <h1>Id: {name.substring(0, 20)}</h1>
          <h3>Price: {price}</h3>
        </div>
      </div>
      <button>Delete Icon</button>
    </div>
  );
};

export default ReviewItem;