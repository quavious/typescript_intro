interface Human {
    name: string,
    age : number,
    gender: string
}

const person = {
    name: "Takeoff",
    gender: "male",
    age : 22
}

const sayHi = (Human):string => {
    return (`Hello ${person.name}, You are ${person.age}, you are ${person.gender}`)
}

console.log(sayHi(person));

export {};    