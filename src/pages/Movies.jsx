import { useState, useEffect } from 'react';
import { searchMovies } from 'components/fetchApi';
import { MovieTrendsList } from 'components/MovieTrendsList/MovieTrendsList';
import { MovieSearch } from 'components/MovieSearch/MovieSearch';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchResult, setsearchResult] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchValue === '') return;
    setOnLoad(true);
    searchMovies(searchValue).then(response => {
      setsearchResult([...response]);
      setOnLoad(false);
    });
  }, [searchValue]);

  const onInputSearch = value => {
    setSearchParams({ query: value });
  };

  return (
    <main>
      <MovieSearch onSubmit={onInputSearch} />
      {searchResult && <MovieTrendsList movies={searchResult} />}
    </main>
  );
};
