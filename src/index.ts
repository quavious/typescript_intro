class Human {
    public name: string;
    public age : number;
    public gender : string;
    constructor(name: string, age: number, gender?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const person = new Human("Offset", 25, "male")

const sayHi = (person) => {
    return (`Hello ${person.name}, You are ${person.age}, you are ${person.gender}`)
}

console.log(sayHi(person));

export {};    