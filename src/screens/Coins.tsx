import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

export default function Coins() {
  return (
    <div>
      <Link to={'/coin/btc'}>
        <Title>Coins</Title>
      </Link>
      <Outlet />
    </div>
  );
}
