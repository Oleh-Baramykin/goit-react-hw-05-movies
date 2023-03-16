import { Link, useLocation } from 'react-router-dom';
import { Box, Img } from './MovieTrendsList.styled';
import noPoster from 'img/noPoster.png';

export const MovieTrendsList = ({ movies }) => {
  const location = useLocation();

  return (
    <Box>
      {movies.map(({ title, id, poster_path }) => {
        return (
          <Box key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={
                  poster_path !== null
                    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                    : noPoster
                }
                alt={title}
              />
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};
