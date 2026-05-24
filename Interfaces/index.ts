//Interfaces are very similar to type, but they are mainly used to define object structures.
interface User {
    name: string;
    age: number;
}

const user:User={
    name:"John",
    age:41,
}

console.log(user.name); // Output: John
console.log(user.age); // Output: 41

//Interfaces can also be used to define function types.
interface Add {
    (a: number, b: number): number;
}   

const add: Add = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5