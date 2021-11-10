// promise

const a = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Hello!");
});

a.then((result) => console.log(result));

const b = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "Error!");
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
