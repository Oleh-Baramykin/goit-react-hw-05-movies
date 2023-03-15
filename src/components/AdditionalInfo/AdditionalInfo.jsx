import { Title, Wrapper, Link, LinkWrap } from './AdditionalInfo.styled';

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
