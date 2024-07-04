import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
  display: block;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchCoins() {
    try {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      if (!response?.ok) {
        throw new Error(`${response.status}`);
      }
      const json = await response.json();
      setCoins(json.slice(0, 100));
    } catch (error) {
      console.error(`Error: fetching coins: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      <Container>
        <Header>
          <Title>Coins</Title>
        </Header>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <CoinList>
            {coins.map((coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                  <Img
                    src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  {coin.name}
                </Link>
              </Coin>
            ))}
          </CoinList>
        )}
      </Container>
    </div>
  );
}
