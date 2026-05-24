"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Union types allow a variable to store multiple possible types. In this example, the variable `id` can be either a string or a number. This is useful when you want to allow for flexibility in the types of values that can be assigned to a variable.
let id;
id = 101;
id = "ABC123";
console.log(id); // Output: ABC123 ......Because variables store only the latest assigned value.
function showResult(result) {
    console.log(`Student result is ${result}`);
}
showResult("pass");
showResult("fail");
//# sourceMappingURL=index.js.map