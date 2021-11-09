// promise

const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello!");
  }, 3000);
});

console.log(a);

setTimeout(() => {
  console.log(a);
}, 3000);
