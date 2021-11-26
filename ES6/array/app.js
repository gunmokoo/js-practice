// Array.of()

const abcd = Array.of("a", "b", "c", "d");

console.log(abcd);

// Array.from()

const buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) =>
    console.log(event.target.innerText)
  );
});

// Araay.includes()

const email = ["koo@naver.com", "gun@google.com", "mo@bc.co.kr"];
console.log(email.includes("google.com"));

// Array.find()

const findEmail = email.find((email) => email.includes("@naver.com"));
console.log(findEmail);

// Array.findIndex()

const target = email.findIndex((email) => email.includes("@naver.com"));
console.log(target);

// Array.fill()

email.fill("*".repeat(5));
console.log(email);

email.fill("^".repeat("5"), 1, 2);
console.log(email);

// Array.flat()

const num = [1, [[2, 3], 4, 5]];
console.log(num);
console.log(num.flat());
console.log(num.flat(2));
console.log(num.flat(3));

// Araay.sort()

const alpha = ["a", "d", "e", "b", "c"];
console.log(alpha.sort());

const fruits = ["apple", "strawberry", "avocado"];
console.log(fruits.sort((a, b) => a.length - b.length));
console.log(fruits.sort((a, b) => b.length - a.length));

const product = [
  {
    name: "a",
    year: 2012,
  },
  {
    name: "b",
    year: 2021,
  },
];
console.log(product.sort((a, b) => a.year - b.year));
console.log(product.sort((a, b) => b.year - a.year));
