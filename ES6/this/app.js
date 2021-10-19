const button = document.querySelector("button");

// this keyword function : button

button.addEventListener("click", function () {
  console.log(this);
});

// this keyword arrow-function : window

button.addEventListener("click", () => {
  console.log(this);
});
