/***
 * `quotes` array
 ***/

const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    name: "Nelson Mandela",
    tag: "Rise",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    name: "Walt Disney",
    tag: "GetItDone",
  },
  {
    quote: "Imagination is more important than knowledge.",
    name: "Albert Einstein",
    citation: "German Physicist",
    year: 1920,
    tag: "Dream",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    name: "Helen Keller",
    tag: "Love",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    name: "James Cameron",
    tag: "LetItGo",
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * `randomColor` function
 ***/

function getBackgroundColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  let quoteRandom = getRandomQuote();
  let quoteStorage = `<p class="quote">${quoteRandom.quote}</p>`;
  quoteStorage += `<p class="source">- ${quoteRandom.name}`;
  if (
    quoteRandom.hasOwnProperty("citation") ||
    quoteRandom.hasOwnProperty("year")
  ) {
    quoteStorage += `<span class="citation">, ${quoteRandom.citation}</span> <span class="year">, ${quoteRandom.year}</span>`;
  }

  quoteStorage += `<span class="tag">, #${quoteRandom.tag}</span></p>`;
  document.querySelector(".container").innerHTML = quoteStorage;
  let color = getBackgroundColor();
  document.querySelector("body").style.backgroundColor = color;
  document.getElementById("random-btn").style.color = color;
}

printQuote();

/***
 * `timing` function
 ***/

// setInterval(function () {
//   printQuote();
// }, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("random-btn")
  .addEventListener("click", printQuote, false);
