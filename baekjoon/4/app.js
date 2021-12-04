// 문자열 반복

const form = document.querySelector("form");
const one = document.querySelector("#one");
const two = document.querySelector("#two");

const onClick = (event) => {
  event.preventDefault();
  let sum = [];
  for (let i = 0; i < two.value.length; i++) {
    for (let j = 0; j < one.value; j++) {
      sum.push(two.value[i]);
    }
  }
  console.log(sum.join(""));
};

form.addEventListener("submit", onClick);
