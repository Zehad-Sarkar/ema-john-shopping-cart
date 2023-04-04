import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async() => {
  const productsLoader = await fetch('products.json')
  const products = await productsLoader.json()
  const storedCart = getShoppingCart()
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find(pd => pd.id === id)
    if (addedProduct) {
      const quantity=storedCart[id]
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
 
  return savedCart;
  // we can return 2 or more varible under process
//1. return [savedCart,products,etc]
  //2. return {savedCard,products, etc}

}


export default cartProductsLoader;