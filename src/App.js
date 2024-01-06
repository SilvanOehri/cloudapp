// App.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./components/Coin";
import './App.css'; // Import the CSS file

function App() {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://openapiv1.coinstats.app/coins',
          {
            headers: {
              'accept': 'application/json',
              'X-API-KEY': 'dyAmLoa1YuMPQHAL8lxIxDpFfpDnuItlIapGc63ICRg='
            }
          }
        );

        setCoinData(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="cryptoHeader"></div>
      <div className="cryptoDisplay">
        {coinData.map((coin) => {
          return (
            <Coin 
              key={coin.id}  // Add a unique key to each Coin component
              name={coin.name} 
              icon={coin.icon} 
              price={coin.price} 
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
