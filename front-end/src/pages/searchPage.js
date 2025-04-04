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
    const advancedSearch = (e) => {
      navigate(`/advanced`);
    }
    return (
    <div className="SearchPage">
      <form className="SearchForm">
        <h1 className="SearchTitle">Explore Fall</h1>
        <div className="SearchMain">
        <label className="SearchBarLabel">Search for cards</label>
        <div classname="SearchBar">
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
        </div>
        <div className="AdditionalButtons">
          <button onClick={advancedSearch}>
            Advanced Search
          </button>
        </div>
        </div>
        </form>
        
    </div>
    )
}

export default SearchPage;
