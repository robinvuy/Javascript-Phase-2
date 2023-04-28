// class searchCandies {
//   constructor(name, price) {
//   this.name = name;
//   this.price = price;
// }

  

  const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];

const searchCandies = (name, maxPrice) => {
  return candies
    .filter(candy => candy.name.toLowerCase().startsWith(name.toLowerCase()) && candy.price <= maxPrice)
    .map(candy => candy.name);
  
    }
  
// candies 
//   .filter(candy => candy.name === searchCandies(name));
//   .filter(candy => candy.name <= searchCandies(price));
    



module.exports = searchCandies;

// const Cand = require();
// const cand1 = new Cand('Mars', 1);
// cand1.searchCandies()