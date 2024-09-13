import styled from 'styled-components';

export default function NotFound() {
  return <Error>404 NotFound</Error>;
}

const Error = styled.div`
  font-size: 3rem;
`;
