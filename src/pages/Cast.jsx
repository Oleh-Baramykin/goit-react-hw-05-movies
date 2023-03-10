import { getMovieCast } from 'components/fetchApi';
import { useState, useEffect } from 'react';
import { MovieCast } from 'components/MovieCast/MovieCast';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [castMovie, setcastMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getCastMovie = async () => {
      const data = await getMovieCast(movieId);
      setcastMovie(data);
    };
    getCastMovie();
  }, [movieId]);

  return <>{castMovie && <MovieCast cast={castMovie} />}</>;
};
