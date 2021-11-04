// rest

const infiniteArgs = (...rest) => console.log(rest);

infiniteArgs("1", 2, true, "hello", [1, 2, 3]);

const friendMaker = (firstOne, ...rest) => {
  console.log(firstOne);
  console.log(rest);
};

friendMaker("one", "two", "three", "four");

const user = {
  name: "gunmo",
  age: 23,
  password: 0000,
};

const killPassword = ({ password, ...rest }) => rest;
const cleanUser = killPassword(user);

console.log(cleanUser);

// rest + spread

const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });

console.log(setCountry(user));

// obj rename

const rename = ({ name: id, ...rest }) => ({ id, ...rest });

console.log(rename(user));
