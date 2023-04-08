import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchAllMovies from '../../api/fetchAllMovies';
import fetchMovieDetails from 'api/fetchMovieDetails';

const MoviesContext = createContext();

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) throw new Error('Post Provider is missing');
  return context;
};

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const results = await fetchAllMovies();
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const getMovieDetails = async (id) => {
    try {
      setIsLoading(true);
      const results = await fetchMovieDetails(id);
      setMovies(results);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        isLoading,
        getMovieDetails,
      }}>
      {children}
    </MoviesContext.Provider>
  );
}

MoviesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MoviesContext, MoviesProvider };
