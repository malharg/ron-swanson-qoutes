
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const result = await axios('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    setQuote(result.data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="app">
      <div className="quote-card">
        <p>{quote}</p>
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={saveQuote}>Save Quote to List</button>
      </div>
      <div className="saved-quotes">
        {savedQuotes.map((q, index) => (
          <div key={index} className="quote-card">
            <p>{q}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
