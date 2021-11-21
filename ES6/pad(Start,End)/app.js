// padStart

const min = 3;
const sec = 2;
const minutes = String(min).padStart(2, "0");
const second = String(sec).padStart(2, "0");

console.log(`${minutes} : ${second}`);

console.log("o".padStart(5, "x"));

// padEnd

console.log("o".padEnd(5, "x"));
