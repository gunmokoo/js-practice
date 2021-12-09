// 크로아티아 알파벳

const form = document.querySelector("form");
const input = document.querySelector("input");

const onClick = (event) => {
  event.preventDefault();
  let word = input.value;
  for (let i = 0; i < word.length; i++) {
    word = word
      .replaceAll("c=", "a")
      .replaceAll("c-", "a")
      .replaceAll("dz=", "a")
      .replaceAll("d-", "a")
      .replaceAll("lj", "a")
      .replaceAll("nj", "a")
      .replaceAll("s=", "a")
      .replaceAll("z=", "a");
  }
  console.log(word.length);
};

form.addEventListener("submit", onClick);
