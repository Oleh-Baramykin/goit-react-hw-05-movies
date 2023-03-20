import { MovieReview } from 'components/MovieReview/MovieReview';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'services/fetchApi';
import { Loader } from 'spinner/spinner';

export const Reviews = () => {
  const [movieReview, setMovieReview] = useState();
  const [onLoad, setOnLoad] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setOnLoad(true);
    const getReviewMovie = async () => {
      const data = await getMovieReview(movieId);
      setMovieReview(data);
    };
    getReviewMovie();
    setOnLoad(false);
  }, [movieId]);

  return (
    <>
      {onLoad && <Loader />}
      {movieReview && <MovieReview review={movieReview} />}
    </>
  );
};
