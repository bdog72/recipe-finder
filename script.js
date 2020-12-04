//
// Importing Module

console.log(`Importing Module`);
// import add, { cart } from './shoppingCart.js';

// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product}'s ordered from supplier`);
  };

  return {
    addToCart,
    orderStock,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
ShoppingCart2.orderStock('beer', 12);
ShoppingCart2.orderStock('wine', 22);

// import {
//   addToCart,
//   totalPrice as price,
//   // totalQuantity,
//   tq,
// } from './shoppingCart.js';

// console.log(price);
// addToCart('beer', 10);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// console.log(bozo('beer', 10));
