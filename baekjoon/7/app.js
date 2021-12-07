// 상수

const form = document.querySelector("form");
const one = document.querySelector("#one");
const two = document.querySelector("#two");

const onClick = (event) => {
  event.preventDefault();
  const a = one.value;
  const b = two.value;
  const oneNum =
    parseInt(a / 100) + parseInt((a / 10) % 10) * 10 + (a % 10) * 100;
  const twoNum =
    parseInt(b / 100) + parseInt((b / 10) % 10) * 10 + (b % 10) * 100;
  if (oneNum > twoNum) {
    console.log(oneNum);
  } else if (twoNum > oneNum) {
    console.log(twoNum);
  } else {
    console.log("=");
  }
};

form.addEventListener("submit", onClick);
