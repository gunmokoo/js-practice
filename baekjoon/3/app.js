// 알파벳 찾기

const form = document.querySelector("form");
const input = document.querySelector("input");

let alphabet = [];
for (let i = 0; i < 26; i++) {
  alphabet.push(-1);
}
const onClick = (event) => {
  event.preventDefault();
  const arr = input.value.split("");
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i].charCodeAt() - 97;
    if (alphabet[key] === -1) {
      alphabet[key] = i;
    }
  }
  console.log(alphabet.join(" "));
};

form.addEventListener("submit", onClick);
