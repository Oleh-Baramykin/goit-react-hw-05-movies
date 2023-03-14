export const MovieCast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ cast_id, name, character, profile_path }) => {
        return (
          <div key={cast_id}>
            <img src={profile_path} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </div>
        );
      })}
    </div>
  );
};
