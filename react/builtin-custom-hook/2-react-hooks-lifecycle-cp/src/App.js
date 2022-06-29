import React from "react";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  React.useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  const [quote, setQuote] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  return<>
    <div data-testid="quote">
      <p>Random Quote</p>
      {loading ? (
        <p >
          Loading...
        </p>
      ) : (
        <div>
          <p>{quote.content}</p>
          <p>{quote.author}</p>
        </div>
      )}
      <button onClick={getQuote}>
        Get another quote
      </button>
    </div>
    </>
}