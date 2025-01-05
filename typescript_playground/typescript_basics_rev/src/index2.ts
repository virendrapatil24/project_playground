interface User {
    firstName: string;
    lastName: string;
    email?: string;
    age: number;
}

function isLegal2(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

let user_viren: User = {
    firstName: "Viren",
    lastName: "Patil",
    age: 19
}

console.log(isLegal2(user_viren))


interface People {
    name: string,
    age: number,
    // greet: () => string
}

let ppl: People = {
    name: "pp1",
    age: 22,
    // greet: () => { return "hi" }
}

// let greeting = ppl.greet()
// console.log(greeting)

class Manager implements People {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let man_user = new Manager("Vre", 34)
console.log(man_user.name)

type Employee = {
    name: string;
    startDate: Date;
};

type Manager2 = {
    name: string;
    department: string;
    store: string
};

type TeamLead = Employee | Manager2;

const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
};

