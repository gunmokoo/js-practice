// Typescript value

let hello: string = "hello";

hello = "hi";

// Typescript function

const plus = (a: number, b: number) => a + b;

console.log(plus(1, 2));

const greet = (name: string, age: number): string => {
  return `Hello ${name} you are ${age} years old`;
};
console.log(greet("Maria", 18));

// interface

const maria = {
  name: "Maria",
  age: 18,
  pretty: true,
};

interface IHuman {
  name: string;
  age: number;
  pretty: boolean;
}

const id = (human: IHuman) => {
  console.log(human.name, human.age, human.pretty);
};

id(maria);
