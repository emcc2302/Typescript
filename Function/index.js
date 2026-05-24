"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
const result = add(5, 3);
console.log(result);
//The third number means the function must return a number.
//Arrow Functio
const square = (x) => {
    return x * x;
};
const squareResult = square(4);
console.log(squareResult);
function getDetails(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}
const userDetails = {
    name: "John Doe",
    age: 30
};
getDetails(userDetails);
//or direct way
getDetails({ name: "Jane Doe", age: 25 });
function getProduct() {
    return {
        title: "Laptop",
        price: 50000,
    };
}
console.log(getProduct());
//# sourceMappingURL=index.js.map