"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data.name);
    console.log(data.email);
}
getUser();
//# sourceMappingURL=index.js.map