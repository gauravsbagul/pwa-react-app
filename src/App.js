import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Coin from "./Coin";
import { ErrorFallBack } from './ErrorFallBack.js';
import { Input } from "./Input";


const renderLoader=() => <p>Loading</p>;


function App() {
  const [coins, setCoins]=useState([]);
  const [search, setSearch]=useState("");


  useEffect(async () => {
    try {
      const res=await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        )
      setCoins(res.data);
    } catch (error) {
      alert("Something Went Wrong")
    }
  }, []);



  const filteredCoins=coins?.filter((coin) => {
    return coin?.name?.toLowerCase().includes(search?.toLowerCase());
  });


  try {
    return (
      
        <div className="coin-app">
          <Input setSearch={ setSearch } />
          { filteredCoins?.map((coin) => (
            <Coin
              key={ coin.id }
              name={ coin.name }
              image={ coin.image }
              symbol={ coin.symbol }
              marketcap={ coin.market_cap }
              price={ coin.current_price }
              priceChange={ coin.price_change_percentage_24h }
              volume={ coin.total_volume }
            />
          )
          ) }
        </div>
      
    )
  } catch (error) {
    return <ErrorFallBack error={ error } />
  }



}

export default App;
