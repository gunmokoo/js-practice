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
