// Symbol - Uniqueness

const superBig = {
  [Symbol("a")]: {
    age: 12,
  },
  [Symbol("a")]: {
    age: 12,
  },
  // Symbol - privacy
  hello: "bye",
};

const b = Object.getOwnPropertySymbols(superBig);
b.forEach((symbol) => console.log(superBig[symbol]));
