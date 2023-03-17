import { Input, Box } from './MovieSearch.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const MovieSearch = ({ onSubmit }) => {
  const [searchValue, setsearchValue] = useState('');

  const onChange = e => {
    setsearchValue(e.target.value);
  };

  const submitSearch = e => {
    e.preventDefault();
    onSubmit(searchValue);
    resetForm();
  };

  const resetForm = () => setsearchValue('');

  return (
    <form onSubmit={submitSearch}>
      <Box>
        <Input
          type="text"
          placeholder="Search movies"
          value={searchValue}
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </Box>
    </form>
  );
};

MovieSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
