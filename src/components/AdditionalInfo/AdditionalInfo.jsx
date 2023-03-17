import { Title, Wrapper, Link, LinkWrap } from './AdditionalInfo.styled';
import PropTypes from 'prop-types';

export const AdditionalInfo = ({ backPath }) => {
  return (
    <Wrapper>
      <Title>Additional information</Title>
      <LinkWrap>
        <Link to="cast" state={{ from: backPath }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: backPath }}>
          Reviews
        </Link>
      </LinkWrap>
    </Wrapper>
  );
};

AdditionalInfo.propTypes = {
  backPath: PropTypes.object.isRequired,
};
