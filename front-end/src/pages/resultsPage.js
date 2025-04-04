import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

function ResultsPage() {
    const[cards, setCards] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error,setError] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");
      
      useEffect(() => {
       if(query) {
          axios.get(`http://localhost:3000/api/search?query=${query}`)
          .then((response) => {
            setCards(response.data);
            setLoading(false);
        }).catch((error) => {
            setError(error.message);
            setLoading(false);
        });
        }
      },[query]);

      if (loading) return <p> Loading...</p>;
      if (error) return <p>Error: {error}</p>;

      return (
        <div>
            <h1>Search Results for "{query}"</h1>
            {cards.length === 0? (
                <p>No results found.</p>
            ) : (
                <ul>
                    {cards.map((card) => (
                        <li key = {card.id}>{card.name}</li>
                    ))}
                </ul>
            )}
        </div>
      );
}

export default ResultsPage;
