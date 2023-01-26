import { useEffect, useState } from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [price, setPrice] = useState(0);
    const [selectedCoin, setSelectedCoin] = useState();

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
                //setSelectedCoin(coins[0]);
                console.log(selectedCoin);
                console.log(coins);
            });
    }, []);

    const onChange = (event) => {
        setPrice(event.target.value);
    };
    const onSelect = (event) => {
        setSelectedCoin((selectedCoin) => {
            // select에서 코인 자체를 받기 위해 json 처리
            // 프로퍼티로 이것저것 해보려고 코인 자체를 가져오도록 해봤음
            return (selectedCoin = JSON.parse(event.target.value));
        });
    };

    return (
        <div>
            <h1>The Coins!!! ({loading ? "" : coins.length})</h1>
            {loading ? <strong>Now Loading...</strong> : null}
            <input
                type="number"
                placeholder="Please Write Your USD..."
                value={price}
                onChange={onChange}></input>
            <p />
            <select onChange={onSelect}>
                <option key={-1}>코인을 선택해주세요</option>
                {coins.map((coin) => {
                    return (
                        <option key={coin.id} value={JSON.stringify(coin)}>
                            {coin.name} ({coin.symbol}): $
                            {coin.quotes.USD.price} USD
                        </option>
                    );
                })}
            </select>
            <h3>
                {selectedCoin !== null &&
                selectedCoin !== undefined &&
                price > 0
                    ? // undefined 비교 넣기 전에 오류 피하기 위해 넣었던 내용
                      // 해당 프로퍼티가 있는지를 확인하는 함수
                      // ? selectedCoin.hasOwnProperty("quotes")
                      //     ? selectedCoin.quotes.hasOwnProperty("USD")
                      "$".concat(
                          price.toString(),
                          "(USD) : ",
                          (price / selectedCoin.quotes.USD.price).toString(),
                          " ",
                          selectedCoin.name,
                          "(",
                          selectedCoin.symbol,
                          ")"
                      )
                    : //     :
                      //       null
                      // : null
                      null}
            </h3>
            {/* <ul>
                {coins.map((coin) => (
                    <li>
                        {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}{" "}
                        USD
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default CoinTracker;
