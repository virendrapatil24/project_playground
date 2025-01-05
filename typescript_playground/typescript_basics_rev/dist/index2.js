"use strict";
function isLegal2(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let user_viren = {
    firstName: "Viren",
    lastName: "Patil",
    age: 19
};
console.log(isLegal2(user_viren));
let ppl = {
    name: "pp1",
    age: 22,
    // greet: () => { return "hi" }
};
// let greeting = ppl.greet()
// console.log(greeting)
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let man_user = new Manager("Vre", 34);
console.log(man_user.name);
