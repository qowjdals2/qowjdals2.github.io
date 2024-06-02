const quotes = [
    {
      quote: "세종의 마음과 정조의 정신을 배우자",
      author: "정민",
    },
    {
      quote: "Just Do it!",
      author: "Nike",
    },
    {
      quote:
        "행신의 자랑 행신",
      author: "행신",
    },

  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
