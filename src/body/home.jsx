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
      localStorage.setItem("userInfoes", WebApp.initDataUnsafe.start_param);
      
    }

  }, [])
  if(userData){
    localStorage.setItem('user', userData.id)
    if(userData.username){
    localStorage.setItem('username', userData.username)
    }else{
      localStorage.removeItem('username')
    }
    if(userData.first_name){
      localStorage.setItem('first_name', userData.first_name)
    }else{
      localStorage.removeItem('first_name')
    }
    if(userData.last_name){
      localStorage.setItem('last_name', userData.last_name)
    }else{
      localStorage.removeItem('last_name')
    }
    if(userData.language_code){
      localStorage.setItem('language_code', userData.language_code)
    }else{
      localStorage.removeItem('language_code')
    }

  }

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
            <li>ID: {localStorage.getItem('user')}</li>
            <li>First Name: {localStorage.getItem('first_name')}</li>
            {userData.last_name && <li>Last Name: {localStorage.getItem('last_name')}</li>}
            {userData.username && <li>Username: {localStorage.getItem('username')}</li>}
            <li>Language Code: {localStorage.getItem('language_code')}</li>
            {userData.is_premium !== undefined && (
              <li>Premium: {localStorage.getItem('is_premium')?'Yes':'No'}</li>
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
