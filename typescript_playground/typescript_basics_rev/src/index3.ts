interface User3 {
    name: string;
    age: number;
}

function sumOfAge(user1: User3, user2: User3): number {
    return user1.age + user2.age;
}

const result = sumOfAge({
    name: "viren",
    age: 20
} as User3, {
    name: "raman",
    age: 21
} as User3);

console.log(result)

// *********************************************************************************************************************

interface User4 {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User4, 'name' | 'age' | 'email'>

// *********************************************************************************************************************

type UpdatePropsOptional = Partial<UpdateProps>

// *********************************************************************************************************************

type User5 = {
    readonly id: number;
    readonly name: string;
}

// *********************************************************************************************************************

interface User6 {
    id: string;
    name: string;
}

type Users1 = { [key: string]: User6 };

const users1: Users1 = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

interface User7 {
    id: string;
    name: string;
}

type Users2 = Record<string, User7>;

const users2: Users2 = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

// *********************************************************************************************************************

interface User8 {
    id: string;
    name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User8>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// *********************************************************************************************************************

type Event2 = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event2, 'scroll'>; // 'click' | 'mousemove'

// *********************************************************************************************************************
// *********************************************************************************************************************
