import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Movies from './views/Movies';
import Movie from './views/Movie';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/movies" replace />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/movies/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
