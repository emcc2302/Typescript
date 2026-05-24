function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3);
console.log(result);

//The third number means the function must return a number.


//Arrow Functio

const square =(x: number): number => {
  return x * x;
}

const squareResult = square(4);
console.log(squareResult);


//Function returing object's elements

type Details = {
    name: string;
    age: number;
};

function getDetails(user: Details): void{
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const userDetails: Details = {
    name: "John Doe",
    age: 30
};

getDetails(userDetails);

//or direct way

getDetails({ name: "Jane Doe", age: 25 });



//Function Retring Objects
type Product = {
  title: string;
  price: number;
};

function getProduct(): Product {
  return {
    title: "Laptop",
    price: 50000,
  };
}

console.log(getProduct());