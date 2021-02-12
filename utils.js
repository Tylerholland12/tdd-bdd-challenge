// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  return area
}

const perimeter = (w, h) => {
  // should return the perimeter
  return perimeter
}

const circleArea = r => {
  // should return the area of the circle
  return circleArea
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}


const getShoppingCart = () => shoppingCart 
  // should return the current state of shopping cart
  // find the shopping cart and return it


const addItemToCart = (item) => shoppingCart.push(item)
  // should add item to shopping cart
  // if the item is not in the cart
  // then add the item to the cart
  // if the item is in the cart
  // return the cart as is


const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  // loop over the items and count each item
  // return the count
  let itemsInCartLength = 0
  for (const item of shoppingCart) {
    itemsInCartLength+=item.quantity
  }
  return itemsInCartLength
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  // search for a specific item in the cart
  // delete either the index or value of that item
  // return the rest of the list
  return { item }
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
