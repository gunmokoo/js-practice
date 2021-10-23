// html in js
const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
  const div = `
  <div class="hello>
    <h1 class="title">Hello</h1>
  </div>
  `;
  wrapper.innerHTML = div;
};

setTimeout(addWelcome, 2000);

const abcd = ["a", "b", "c", "d"];

const list = `
    <h1>Alphabet</h1>
    <ul>
        ${abcd.map((abcd) => `<li>${abcd}</li>`).join(" ")}
    </ul>
`;
wrapper.innerHTML = list;
