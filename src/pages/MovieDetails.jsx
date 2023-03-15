import { detailInfoMovie } from 'components/fetchApi';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackLink } from 'components/BackLink/BackLink';

export const MovieDitails = () => {
  const [detailInfo, setdetailInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backPath = location.state?.from ?? '/';

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
          <BackLink to={backPath}>Go back</BackLink>
          <MovieInfo movieInfo={detailInfo} />
          <AdditionalInfo backPath={backPath} />
        </>
      )}
      <Outlet />
    </main>
  );
};
