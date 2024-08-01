"use client"
import WebApp from "@twa-dev/sdk"
import React, { useEffect, useState } from "react"
import "./style.css";
import Ton from "../assets/ton.png";
import TonUp from '../assets/tonup.png';
import { IoWallet } from "react-icons/io5";


const home = () => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe)
      localStorage.setItem('user', JSON.stringify(WebApp.initDataUnsafe.user))
    }

  }, [])

  return (
    <>
      <div className="body-balance">
        <div className="ton-balance">
            <img src={Ton} alt="" className="home-img" />
          <div className="wallet">
            <div className="balance">
              <span>Balance : </span>
              <span>0 TON</span>
            </div>
            <div className="wallets">
              <button className="btn-ton-wallet"><IoWallet  className="wallet-img" /></button>
            
            </div>
          </div>
        </div>
        <div className="another-balance">
        <img src={TonUp} alt="" className="home-img" />
          <div className="wallet">
            <div className="balance">
              <span>Balance : </span>
              <span>0 TonUp</span>
            </div>
            <div className="wallets">
              <button className="btn-ton-wallet"><IoWallet  className="wallet-img" /></button>
            
            </div>
          </div>
        </div>

        {userData ? (
    <>
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      <ul>
        {Object.entries(userData).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </>
  ) : (
    <div>Loading...</div>
  )}

      </div>
    </>
  );
};

export default home;
