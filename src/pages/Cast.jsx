import { getMovieCast } from 'services/fetchApi';
import { useState, useEffect } from 'react';
import { MovieCast } from 'components/MovieCast/MovieCast';
import { useParams } from 'react-router-dom';
import { Loader } from 'spinner/spinner';

export const Cast = () => {
  const { movieId } = useParams();
  const [castMovie, setcastMovie] = useState();
  const [onLoad, setonLOad] = useState(false);

  useEffect(() => {
    setonLOad(true);
    const getCastMovie = async () => {
      const data = await getMovieCast(movieId);
      setcastMovie(data);
    };
    getCastMovie();
    setonLOad(false);
  }, [movieId]);

  return (
    <>
      {onLoad && <Loader />}
      {castMovie && <MovieCast cast={castMovie} />}
    </>
  );
};
