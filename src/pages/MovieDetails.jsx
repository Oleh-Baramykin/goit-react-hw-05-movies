import { detailInfoMovie } from 'components/fetchApi';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const MovieDitails = () => {
  const [detailInfo, setdetailInfo] = useState(null);
  const { movieId } = useParams();
  // const location = useLocation();

  useEffect(() => {
    const getInfoMovie = async () => {
      const data = await detailInfoMovie(movieId);
      setdetailInfo(data);
    };
    getInfoMovie();
  }, [movieId]);
  // console.log(detailInfo);
  return (
    <main>
      {detailInfo && (
        <>
          <MovieInfo movieInfo={detailInfo} />
        </>
      )}
      <Outlet />
    </main>
  );
};
