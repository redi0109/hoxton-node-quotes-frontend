import { Quote } from '../App'
import "../App.css";

type Props = {
    quotes: Quote[]
}

export default function Quotes({quotes}: Props) {
    
  return (
    <div>

    <ul>
        <h1>Quotes</h1>
        {quotes.map((quote) => (
            <div className='authorDetails'>
          <li key={quote.id}>
            <h2>Name: {quote.author.name}</h2>
            <h3>Quote: "{quote.author.quote}"</h3>
            <h4>Age: {quote.author.age}</h4>
            <img src={quote.author.image} className="authorImg" alt={`${quote.author.name}`} />
          </li>
          </div>
        ))}
      </ul>
      </div>
  )
}