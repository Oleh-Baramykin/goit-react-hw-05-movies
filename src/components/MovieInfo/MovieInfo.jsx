import { Img, Wrapper } from './MovieInfo.styled';
import PropTypes from 'prop-types';
import noPoster from 'img/noPoster.png';

export const MovieInfo = ({
  movieInfo: { overview, title, poster_path, vote_average, genres },
}) => {
  return (
    <Wrapper>
      <Img
        src={
          poster_path !== null
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : noPoster
        }
        alt={title}
      />
      <div>
        <h2>{title}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Owerwiew</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres.map(genre => genre.name).join(' , ')}</p>
      </div>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  genres: PropTypes.array,
  overview: PropTypes.string,
};
