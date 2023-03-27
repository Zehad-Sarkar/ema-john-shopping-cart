// const addToDB = id => {
//   //set cart to local storage
//   const shoppingCart = getShoppingCart()
//   const quantity = shoppingCart[id]
//   if (!quantity) {
//     shoppingCart[id] = 1;
//   }
//   else {
//     const newQuantity = quantity + 1;
//     shoppingCart[id] = newQuantity;
//   }
//   localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
// }

// //remove cart from local storage
// const removeFromDb = id => {
//   const shoppingCart = getShoppingCart()
//   if (id in shoppingCart) {
//     delete shoppingCart[id]
//     localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
//   }
// }

// //get cart from local storage
// const getShoppingCart = () => {
//   let shoppingCart = {}
//   const storedCart = localStorage.getItem('shopping-cart')
//   if (storedCart) {
//     shoppingCart=JSON.parse(storedCart)
//   }
//   return shoppingCart;
// }

// //delete cart from local storage
// const deleteShoppingCart = () => {
//   localStorage.removeItem('shoppingCart');
// };


// export { addToDB, removeFromDb, getShoppingCart, deleteShoppingCart};