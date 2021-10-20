const abc = ["apple", "banana", "carrot"];

// implicit return
const d = abc.map((item) => item + "d");

console.log(d);

// Arrow Function
const e = (item) => {
  return item + "e";
};
const abc2 = abc.map(e);
console.log(abc2);

// Arrow Functions Applications
const abc3 = abc.find((item) => item.includes("b"));
console.log(abc3);

const abc4 = abc.filter((item) => !item.includes("b"));
console.log(abc4);

const abc5 = abc.map((item) => item.split("a"));
console.log(abc5);

const abc6 = abc.map((item, index) => ({
  fruit: item.split("a"),
  index,
}));
console.table(abc6);
