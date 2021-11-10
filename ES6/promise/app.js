// promise

const a = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Hello!");
});

a.then((result) => console.log(result));

const b = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "Error!");
});

b.then((result) => console.log(result)).catch((error) => console.log(error));

// chaining promise

const c = new Promise((resolve, reject) => {
  resolve(2);
});

const two = (num) => num * num;

c.then(two)
  .then(two)
  .then(two)
  .then((num) => console.log(num))
  .catch((error) => console.log(error));

// Promise.all

const d1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "One!");
});
const d2 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Two!");
});
const d3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Three!");
});

const d = Promise.all([d1, d2, d3]);

d.then((result) => console.log(result));

const e1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "One!");
});
const e2 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Two!");
});
const e3 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "Three Error!");
});

const e = Promise.all([e1, e2, e3]);

e.then((result) => console.log(result)).catch((error) => console.log(error));

// Promise.race

const f1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "One!");
});
const f2 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Two!");
});
const f3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Three!");
});

const f = Promise.race([f1, f2, f3]);

f.then((result) => console.log(result));

//

const g = new Promise((resolve) => {
  setTimeout(resolve, 10000, "Hi!");
})
  .then((value) => console.log(value))
  .finally(() => console.log("Finally!"));
