// 단어의 개수

const form = document.querySelector("form");
const input = document.querySelector("input");

const onClick = (event) => {
  event.preventDefault();
  let word = input.value.split(" ");
  word = word.filter((item) => item !== "");
  console.log(word.length);
};

form.addEventListener("submit", onClick);
