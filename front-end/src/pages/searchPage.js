import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SearchPage() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
      e.preventDefault();
      if (query.trim()) {
        navigate(`/results?query=${query}`);
      }
    };
    return (
    <div className="App">
      <form>
        <label>Search for Cards</label>
        <input type="text" 
        id="search" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="e.g. Explore"
        />
        <button
        onClick={handleSearch}
        >
          Search
        </button>
        </form>
        
    </div>
    )
}

export default SearchPage;
