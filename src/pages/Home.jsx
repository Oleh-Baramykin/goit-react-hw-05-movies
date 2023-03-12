import { getTrendsMovies } from 'components/fetchApi';
import { useState, useEffect } from 'react';
import { MovieTrendsList } from 'components/MovieTrendsList/MovieTrendsList';

export const Home = () => {
  const [trendsMovies, settrendsMovies] = useState(null);
  // const [onLoad, setonLOad] = useState(false);

  useEffect(() => {
    // setonLOad(true);
    getTrendsMovies().then(responce => {
      settrendsMovies([...responce]);
    });
    // setonLOad(false);
  }, []);
  return (
    <main>
      {/* {onLoad && <Loader />} */}
      {trendsMovies && <MovieTrendsList movies={trendsMovies} />}
    </main>
  );
};
