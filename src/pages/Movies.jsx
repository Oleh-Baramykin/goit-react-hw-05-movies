import { Input, Box } from 'components/SearchMovie/SearchMovie.styled';

export const Movies = () => {
  return (
    <main>
      <form action="">
        <Box>
          <Input type="text" placeholder="Search movies" />
          <button type="submit">Search</button>
        </Box>
      </form>
    </main>
  );
};
