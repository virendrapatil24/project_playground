"use strict";
const greet = (firstName) => {
    console.log("Hello " + firstName);
};
greet("virendra");
function sum(a, b) {
    return a + b;
}
console.log(sum(8, 89));
function isLegal(age) {
    if (age < 18) {
        return false;
    }
    else {
        return true;
    }
}
console.log(isLegal(17));
function delayCall(fn) {
    setTimeout(fn, 1000);
}
delayCall(() => console.log("I have run now!"));
