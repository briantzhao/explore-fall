import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SearchPage from './pages/searchPage';
import ResultsPage from './pages/resultsPage';
import AdvancedPage from './pages/advancedPage';
function App() {
  return (
    <div className = "App">

    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage/>}/>
        <Route path="/advanced" element={<AdvancedPage/>}/>
      </Routes>
    </Router>
    </div>
    
  );
}
export default App;
