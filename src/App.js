import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useffect(() => {
    setIsLoading(true);
    try {
      const res = await fetch(
        //back end
      );
      const data = await res.json();
      setSearchResults(data);
    } catch (error) {
      setError(error);
    }
    if(searchTerm.length > 0) {
      fetchData();
    }
  }, [searchTerm])
  return (
    <div className="App">
      <form>
        <label>Search for a card:</label>
        <input type="text" id="search" value={searchTerm} onChange={event => setSearchTerm(event.target.value_)} />
        </form>
        {isLoading? (
          <p>One moment please...</p>
        ): (
          searchResults.map(result => {
            <div key={result.id}>
              <h2>{result.cardName}</h2>
            </div>
          })
        )}
    </div>
  );
}

export default App;
