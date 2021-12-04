// 알파벳 찾기

const form = document.querySelector("form");
const input = document.querySelector("input");

let alphabet = [];
for (let i = 0; i < 26; i++) {
  alphabet.push(-1);
}
const onClick = (event) => {
  event.preventDefault();
  alphabet.fill(-1, 0);
  for (let i = 0; i < input.value.length; i++) {
    const key = input.value[i].charCodeAt() - 97;
    if (alphabet[key] === -1) {
      alphabet[key] = i;
    }
  }
  console.log(alphabet.join(" "));
};

form.addEventListener("submit", onClick);
