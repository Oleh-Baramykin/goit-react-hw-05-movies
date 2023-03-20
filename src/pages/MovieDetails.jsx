import { detailInfoMovie } from 'services/fetchApi';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'spinner/spinner';

export const MovieDitails = () => {
  const [detailInfo, setdetailInfo] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backPath = location.state?.from ?? '/';

  useEffect(() => {
    setOnLoad(true);
    const getInfoMovie = async () => {
      const data = await detailInfoMovie(movieId);
      setdetailInfo(data);
    };
    getInfoMovie();
    setOnLoad(false);
  }, [movieId]);

  return (
    <main>
      {detailInfo && (
        <>
          {onLoad && <Loader />}
          <BackLink to={backPath}>Go back</BackLink>
          <MovieInfo movieInfo={detailInfo} />
          <AdditionalInfo backPath={backPath} />
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
