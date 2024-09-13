const BASE_URL = 'https://api.coinpaprika.com/v1';
export async function fetchCoins() {
  const response = await fetch(`${BASE_URL}/coins`);
  const json = await response.json();
  return json;
}

export async function fetchCoinData(id: string | undefined) {
  const response = await fetch(`${BASE_URL}/coins/${id}`);
  const json = await response.json();
  return json;
}

export async function fetchCoinPrice(id: string | undefined) {
  const response = await fetch(`${BASE_URL}/tickers/${id}`);
  const json = await response.json();
  return json;
}

export async function fetchCoinHistory(id: string | undefined) {
  const response = await fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${id}`
  );
  const json = await response.json();
  return json;
}
