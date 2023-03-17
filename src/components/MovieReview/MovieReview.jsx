import { Li } from './MovieReview.styled';
import PropTypes from 'prop-types';

export const MovieReview = ({ review }) => {
  return (
    <ul>
      {review.map(({ author, content, id }) => {
        return (
          <Li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </Li>
        );
      })}
    </ul>
  );
};

MovieReview.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
