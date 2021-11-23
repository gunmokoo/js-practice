// Object.entries()

const human = {
  name: "koo",
  age: 23,
};

Object.entries(human).forEach((item) => console.log(item[0], item[1]));

// Object.values()

Object.values(human).forEach((item) => console.log(item));

// Object.fromEntries()

const a = Object.fromEntries([
  ["name", "gun"],
  ["age", 23],
]);
console.log(a);
