const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("should find the area", function() {
  const find_area = utils.area()
  expect(find_area).to.not.have.property('null')
})
it("should find the perimeter", function() {
  const find_perimeter = utils.perimeter()
  expect(find_perimeter).to.not.have.property('null')
})
it("should find the area of a circle", function() {
  const circle_area = utils.circleArea()
  expect(circle_area).to.not.have.property('null')
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const item = utils.createItem("pear", .55)
  expect(item).to.be.a("object")
  const shoppingCart = utils.getShoppingCart()
  expect(shoppingCart).to.be.a("array")
})

it("Should add a new item to the shopping cart", function() {
  const item = utils.createItem("sample", .78)
  expect(item).to.be.a("object")
  const newCartItemLength = utils.addItemToCart()
  expect(newCartItemLength).to.be.a("number")
})

it("Should return the number of items in the cart", function() {
  const item = utils.createItem("mango", .89)
  utils.addItemToCart(item)
  expect(item).to.be.a("object")
  const inCartItems = utils.getNumItemsInCart()
  expect(inCartItems).to.not.have.property('null')
})

it("Should remove items from cart", function() {
  const item = utils.createItem("pine", .32)
  utils.addItemToCart(item)
  const removeItem = utils.removeItemFromCart()
  const newCart = utils.getShoppingCart()
  expect(removeItem).to.be.a('object')
  expect(newCart).to.be.a("array")
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
