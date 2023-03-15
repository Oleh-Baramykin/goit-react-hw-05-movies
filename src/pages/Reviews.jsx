import { MovieReview } from 'components/MovieReview/MovieReview';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'components/fetchApi';

export const Reviews = () => {
  const [movieReview, setMovieReview] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getReviewMovie = async () => {
      const data = await getMovieReview(movieId);
      setMovieReview(data);
    };
    getReviewMovie();
  }, [movieId]);

  return <>{movieReview && <MovieReview review={movieReview} />}</>;
};
