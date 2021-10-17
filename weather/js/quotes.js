const quotes = [
  {
    quote: "Opportunities are selfish.",
    author: "-Ging-",
  },
  {
    quote: "the choice is heavy.",
    author: "-Ging-",
  },
  {
    quote: "Precious things are around you.",
    author: "-Ging-",
  },
  {
    quote: "The strongest weapon is the tongue.",
    author: "-Ging-",
  },
  {
    quote: "It's not all you see.",
    author: "-Ging-",
  },
  {
    quote: "The friend of success is hard work.",
    author: "-Ging-",
  },
  {
    quote: "let's live well. let's have fun. to be happy.",
    author: "-Ging-",
  },
  {
    quote: "stay away from anger.",
    author: "-Ging-",
  },
  {
    quote: "let me love me.",
    author: "-Ging-",
  },
  {
    quote: "Let's make the relationship clear.",
    author: "-Ging-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
