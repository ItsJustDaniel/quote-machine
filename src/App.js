import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    quotes: [
      {
        quotes:
          "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
        author: "Linus Torvalds",
      },
      {
        quotes:
          "A good programmer is someone who always looks both ways before crossing a one-way street",
        author: "Doug Linder",
      },
      {
        quotes:
          "It’s the only job I can think of where I get to be both an engineer and an artist. There’s an incredible, rigorous, technical element to it, which I like because you have to do very precise thinking. On the other hand, it has a wildly creative side where the boundaries of imagination are the only real limitation.",
        author: "Andy Hertzfeld",
      },
      {
        quotes:
          "Functions should do one thing. They should do it well. They should do it only.",
        author: "Robert C. Martin",
      },
      {
        quotes: "The fool wonders, the wise man asks.",
        author: "Benjamin Disraeli",
      },
      {
        quotes:
          "In theory, there is no difference between theory and practice. But, in practice, there is.",
        author: "Jan L. A. van de Snepscheut",
      },
      {
        quotes: "Eighty percent of success is showing up.",
        author: "Woody Allen",
      },
      {
        quotes: "Perseverance and spirit have done wonders in all ages.",
        author: "George Washington",
      },
      {
        quotes:
          "Self-education is, I firmly believe, the only kind of education there is.",
        author: "Isaac Asimov",
      },
      {
        quotes: "All I have learned, I learned from books.",
        author: "Abraham Lincoln",
      },
      {
        quotes:
          "Practice doesn’t make perfect. Practice makes myelin, and myelin makes perfect.",
        author: "Daniel Coyle",
      },
      {
        quotes:
          "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
        author: "Bjarne Stroustrup",
      },
      {
        quotes: "Good design adds value faster than it adds cost.",
        author: "Thomas C. Gale",
      },
      {
        quotes:
          "Treat your code like poetry and take it to the edge of the bare minimum..",
        author: "Ilya Dorman",
      },
      {
        quotes: "It’s all talk until the code runs.",
        author: "Ward Cullingham",
      },
      {
        quotes:
          "“I can’t think of a job I’d rather do than computer programming. All day, you create patterns and structure out of the formless void, and you solve dozens of smaller puzzles along the way.",
        author: "Peter Van Der Linden",
      },
      {
        quotes: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds",
      },
      {
        quotes: "Every programmer is an author.",
        author: "Sercan Leylek",
      },
      {
        quotes: "I object to doing things that computers can do",
        author: "Olin Shivers",
      },
      {
        quotes:
          "The magic of myth and legend has come true in our time. One types the correct incantation on a keyboard, and a display screen comes to life, showing things that never were nor could be...",
        author: " Frederick Brooks",
      },
      {
        quotes:
          "I will, in fact, claim that the difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
        author: "Linus Torvalds",
      },
      {
        quotes: "An algorithm is like a recipe.",
        author: "Waseem Latif",
      },
      {
        quotes:
          "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        author: "John Woods",
      },
      {
        quotes:
          "Beware of ‘the real world.’ A speaker’s appeal to it is always an invitation not to challenge his tacit assumptions.",
        author: "Edsger W. Dijkstra",
      },
      {
        quotes:
          "You can’t have great software without a great team, and most software teams behave like dysfunctional families.",
        author: "Jim McCarthy",
      },
      {
        quotes:
          "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.",
        author: "Randall E. Stross",
      },
      {
        quotes:
          "Love the little trade which thou hast learned, and be content therewith.",
        author: " Marcus Aurelius",
      },
    ],
    currentQuote: {},
    tweetedLink: window.location.href,
  };
  componentDidMount() {
    const random = Math.floor(Math.random() * 4);
    this.setState({ currentQuote: this.state.quotes[random] });
  }
  handleQuoteClick = () => {
    const random = Math.floor(Math.random() * 4);
    this.setState({ currentQuote: this.state.quotes[random] });
  };

  render() {
    return (
      <div id="root-container">
        <div id="quote-box">
          <h1 id="text">{this.state.currentQuote.quotes}</h1>
          <h2 id="author"> ~ {this.state.currentQuote.author}</h2>
          <div id="buttons-container">
            <button id="new-quote" onClick={this.handleQuoteClick}>
              New Quote
            </button>

            <a
              id="tweet-quote"
              href={
                "https://twitter.com/intent/tweet?" +
                "&text=" +
                this.state.currentQuote.quotes +
                " " +
                this.state.currentQuote.author
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter fa-lg twitter"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
