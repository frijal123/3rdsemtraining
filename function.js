const arr=[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 25.99,
    "discount": 5,
    "rating": 4.3,
    "inStock": true,
    "tags": ["computer", "mouse", "wireless"],
    "variants": [
      { "color": "Black", "quantity": 25 },
      { "color": "White", "quantity": 10 }
    ]
  },
  {
    "id": 2,
    "name": "Mechanical Keyboard",
    "category": "Electronics",
    "price": 89.99,
    "discount": 10,
    "rating": 4.7,
    "inStock": false,
    "tags": ["keyboard", "mechanical", "rgb"],
    "variants": [
      { "color": "Black", "quantity": 0 },
      { "color": "Gray", "quantity": 5 }
    ]
  },
  {
    "id": 3,
    "name": "Running Shoes",
    "category": "Fashion",
    "price": 59.5,
    "discount": 15,
    "rating": 4.1,
    "inStock": true,
    "tags": ["shoes", "sports", "running"],
    "variants": [
      { "color": "Blue", "quantity": 15 },
      { "color": "Red", "quantity": 7 }
    ]
  },
  {
    "id": 4,
    "name": "Cotton Hoodie",
    "category": "Fashion",
    "price": 35.0,
    "discount": 0,
    "rating": 4.0,
    "inStock": false,
    "tags": ["hoodie", "cotton", "winter"],
    "variants": [
      { "color": "Black", "quantity": 0 },
      { "color": "Green", "quantity": 2 }
    ]
  },
  {
    "id": 5,
    "name": "Smart Watch",
    "category": "Electronics",
    "price": 149.99,
    "discount": 20,
    "rating": 4.8,
    "inStock": true,
    "tags": ["watch", "smart", "fitness"],
    "variants": [
      { "color": "Black", "quantity": 30 },
      { "color": "Pink", "quantity": 12 }
    ]
  }
]
// 1. search by  product name
// 2. Check if any product out of stock
// 3. Check if all electronics > $20
// 4. sort by price
// 5. sort by rating 
// 6. find total stock 
// 7. Remove or insert products
// 8. filter by electronics category

//1
const searchByName = arr.filter(n=>n.name==="Smart Watch");
console.log(searchByName);
//2
const isOutofStock = arr.some(n=>n.inStock===false);
console.log(isOutofStock);
//3
const allElectronicsAbove20 = arr.filter(n=>n.category==="Electronics").every(n=>n.price>20);
console.log(allElectronicsAbove20);
//4
const sortByPrice = arr.slice().sort((a,b)=>a.price-b.price);
console.log(sortByPrice);
//5
const sortByRating = arr.slice().sort((a,b)=>b.rating-a.rating); 
console.log(sortByRating);
//6
const totalStock = arr.reduce((total,product)=>{
  const productStock = product.variants.reduce((sum,variant)=>sum + variant.quantity,0);
  return total + productStock;
},0);
console.log(totalStock);
//7
// Remove product with id 4
const removeProduct = arr.filter(n=>n.id!==4);
console.log(removeProduct);
// Insert new product
const newProduct = {
  "id": 6,
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 45.0,
  "discount": 10,
  "rating": 4.5,
  "inStock": true,
  "tags": ["speaker", "bluetooth", "audio"],
  "variants": [
    { "color": "Black", "quantity": 20 },
    { "color": "Blue", "quantity": 15 }
  ]
};
const updatedArr = [...removeProduct, newProduct];
console.log(updatedArr);
