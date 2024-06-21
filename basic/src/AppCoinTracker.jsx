import React, {useState, useEffect} from 'react'

export default function AppCoinTracker() {
    const [loaded, setLoaded] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        // fetch('https://api.coinpaprika.com/v1/tickers')
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        .then((response) => response.json())
        .then((data) => {
            setCoins(data)
            setLoaded(false)
        })
        .catch((error) => console.log(error))
    }, []);
    console.log(coins);
    return (
        <div>
            <h1>The Coins! {}</h1>
            {loaded ? <strong>Loading...</strong> : null}
            <ul>
                {coins.map(coin => (
                    <li key={coin.id}>
                        {coin.name}({coin.symbol}): {coin.current_price} USD
                    </li>
                ))}
            </ul>
        </div>
    );
}