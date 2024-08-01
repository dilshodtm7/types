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
      setUserData(WebApp.initDataUnsafe.user)
      
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
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            {userData.last_name && <li>Last Name: {userData.last_name}</li>}
            {userData.username && <li>Username: {userData.username}</li>}
            <li>Language Code: {userData.language_code}</li>
            {userData.is_premium !== undefined && (
              <li>Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
            )}
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
