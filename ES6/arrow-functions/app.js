const names = ["a", "b", "c"];

// implicit return
const d = names.map((item) => item + "d");

console.log(d);

// Arrow Function
const e = (item) => {
  return item + "e";
};

const names2 = names.map(e);

console.log(names2);
