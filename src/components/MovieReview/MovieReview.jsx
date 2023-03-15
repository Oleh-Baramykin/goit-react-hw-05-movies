import { Li } from './MovieReview.styled';

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
