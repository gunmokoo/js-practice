// 숫자의 합

const form = document.querySelector("form");
const one = document.querySelector("#one");
const two = document.querySelector("#two");

const onClick = (event) => {
  event.preventDefault();
  const unit =
    (two.value / 10) * (one.value - 1)
      ? 0
      : 10 * (one.value - 1)
      ? 0
      : (two.value / 10) * (one.value - 1)
      ? 0
      : 10 * (one.value - 1);
  const differenceNum = one.value / unit ? 0 : one.value / unit;
  if (differenceNum === 0) {
    const num = String(two.value).split("");
    let sum = 0;
    for (let i = 0; i < one.value; i++) {
      sum += parseInt(num[i]);
    }
    console.log(sum);
  } else {
    console.log("retry");
  }
};

form.addEventListener("submit", onClick);
