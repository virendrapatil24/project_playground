const greet = (firstName: string) => {
    console.log("Hello " + firstName);
}

greet("virendra")

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(8, 89))

function isLegal(age: number): boolean {
    if (age < 18) {
        return false
    } else {
        return true;
    }
}

console.log(isLegal(17))

function delayCall(fn: () => void) {
    setTimeout(fn, 1000)
}

delayCall(() => console.log("I have run now!"))