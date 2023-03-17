import { getTrendsMovies } from 'services/fetchApi';
import { useState, useEffect } from 'react';
import { MovieTrendsList } from 'components/MovieTrendsList/MovieTrendsList';
import { Loader } from 'spinner/spinner';

export const Home = () => {
  const [trendsMovies, settrendsMovies] = useState(null);
  const [onLoad, setonLOad] = useState(false);

  useEffect(() => {
    setonLOad(true);
    getTrendsMovies().then(responce => {
      settrendsMovies([...responce]);
    });
    setonLOad(false);
  }, []);

  return (
    <main>
      {onLoad && <Loader />}
      {trendsMovies && <MovieTrendsList movies={trendsMovies} />}
    </main>
  );
};
