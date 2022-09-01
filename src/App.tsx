import { useEffect, useState } from "react";
import "./App.css";

export type Quote = {
  id: number;
  quote: string;
  author: string;
};

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/quotes`)
    .then((res) => res.json())
    .then((quotesFromServer) => setQuotes(quotesFromServer));
  }, [])

  return <div className="App">
   
  </div>;
}

export default App;
