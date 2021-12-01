// 아스키 코드

const form = document.querySelector("form");
const input = document.querySelector("input");

const onClick = (event) => {
  event.preventDefault();
  console.log(input.value.charCodeAt());
};

form.addEventListener("submit", onClick);
