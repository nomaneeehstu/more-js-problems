// const products = [
//     {Name: 'Laptop', Price : 43000},
//     {Name: 'Shirt', Price : 500},
//     {Name: 'Watch', Price : 2515},
//     {Name: 'Phone', Price : 55000}
// ]

// let totalPrice = 0;

// for(const product of products){
//     totalPrice = totalPrice + product.Price;
// }

// console.log(totalPrice);


const cart = [
    {Name: 'Laptop', Price : 43000, quantity: 1},
    {Name: 'Shirt', Price : 500, quantity: 8},
    {Name: 'Watch', Price : 2515, quantity: 3},
    {Name: 'Phone', Price : 55000, quantity: 1}
]

let cartTotal = 0;
for(const product of cart){
  const productTotal = product.Price * product.quantity;
  cartTotal = cartTotal + productTotal;
}

console.log(cartTotal);