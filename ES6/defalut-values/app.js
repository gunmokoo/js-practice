// undefined
function sayHi(name) {
  return "Hi " + name;
}

console.log(sayHi());

// use defalut value
const sayHello = (name = "Ging") => "Hello " + name;

console.log(sayHello());

// use backtick

const sayGreeting = (name = "Ging") => `Hi. Hello ${name}`;

console.log(sayGreeting());
