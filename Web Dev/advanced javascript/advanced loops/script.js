const basket = ["apples", "orange", "candies"];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    candies: 1000
}

for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

basket.forEach(item => {
    console.log(item);
})

// for of
// Iterating - arrays, strings
for (item of basket) {
    console.log(item);
}

for (item of "basket") {
    console.log(item);
}

// for in - properties
// enumerating - objects
for (item in detailedBasket) {
    console.log(item);
}