import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SearchPage from './pages/searchPage';
import ResultsPage from './pages/resultsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage/>}/>
      </Routes>
    </Router>
    
  );
}
export default App;
