// 단어 공부

const form = document.querySelector("form");
const input = document.querySelector("input");

let alphabet = [];
for (let i = 0; i < 26; i++) {
  alphabet.push(0);
}
const onClick = (event) => {
  event.preventDefault();
  alphabet.fill(0, 0);
  let maxNumIndex;
  for (let i = 0; i < input.value.length; i++) {
    const key = input.value[i].toUpperCase().charCodeAt() - 65;
    alphabet[key] += 1;
  }
  for (let i = input.value.length; i > 0; i--) {
    if (alphabet.includes(i)) {
      maxNumIndex = alphabet.filter((num) => num >= i);
      break;
    }
  }
  if (maxNumIndex.length > 1) {
    console.log("?");
  } else {
    const num = alphabet.findIndex((num) => num >= maxNumIndex[0]);
    console.log(String.fromCharCode(num + 65));
  }
};

form.addEventListener("submit", onClick);
