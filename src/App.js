import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { MoviesProvider } from 'context/movies';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Movies from './views/Movies';

function App() {
  return (
    <MoviesProvider>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/movies" replace />} />
          <Route exact path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </MoviesProvider>
  );
}

export default App;
