// 다이얼

const form = document.querySelector("form");
const input = document.querySelector("input");

const onClick = (event) => {
  event.preventDefault();
  let sum = 0;
  let word = input.value;
  for (let i = 0; i < word.length; i++) {
    if (word[i] >= "W") {
      sum += 10;
    } else if (word[i] >= "T") {
      sum += 9;
    } else if (word[i] >= "P") {
      sum += 8;
    } else if (word[i] >= "M") {
      sum += 7;
    } else if (word[i] >= "J") {
      sum += 6;
    } else if (word[i] >= "G") {
      sum += 5;
    } else if (word[i] >= "D") {
      sum += 4;
    } else if (word[i] >= "A") {
      sum += 3;
    }
  }
  console.log(sum);
};

form.addEventListener("submit", onClick);
