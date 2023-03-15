import { Ul, Image, Item, Character, Name } from './MovieCast.styled';

export const MovieCast = ({ cast }) => {
  return (
    <Ul>
      {cast.map(({ cast_id, name, character, profile_path }) => {
        return (
          <Item key={cast_id}>
            <Image
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
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
