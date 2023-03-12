import { Link, useLocation } from 'react-router-dom';

export const MovieTrendsList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map(({ title, id }) => {
        return (
          <div key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <p>{title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
