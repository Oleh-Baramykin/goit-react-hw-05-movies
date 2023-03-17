import { Ul, Image, Item, Character, Name } from './MovieCast.styled';
import noPoster from 'img/noPoster.png';
import PropTypes from 'prop-types';

export const MovieCast = ({ cast }) => {
  return (
    <Ul>
      {cast.map(({ cast_id, name, character, profile_path }) => {
        return (
          <Item key={cast_id}>
            <Image
              src={
                profile_path !== null
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : noPoster
              }
              alt={name}
            />
            <Name>{name}</Name>
            <Character>
              <p>Character: {character}</p>
            </Character>
          </Item>
        );
      })}
    </Ul>
  );
};

MovieCast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
