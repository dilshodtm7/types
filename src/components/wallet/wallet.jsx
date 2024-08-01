import React,{ useEffect } from "react";
import "./style.css";
import Ton from "../../assets/ton.png";
import TonUp from '../../assets/tonup.png';
import { IoWallet } from "react-icons/io5";
import { BiTask } from "react-icons/bi";

const home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@tonconnect/ui@0.0.9/dist/tonconnect-ui.min.js";
    script.onload = () => {
      const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: "https://raw.githubusercontent.com/ton-connect/ton-connect-manifest/master/manifest.json",
        buttonRootId: "connect"
      });
    };
    document.body.appendChild(script);
  }, []);
  

  return (
    <>
      <div className="body-balance">
        <div className="ton-balance">
            <img src={Ton} alt="" className="home-img" />
          <div className="wallet">
            <div className="balance">
              <span>Balance </span>
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
              <span>Balance </span>
              <span>0 TonUp</span>
            </div>
            
            <div className="wallets">
              <button className="btn-ton-wallet" id="tonconnect-buttons"><IoWallet  className="wallet-img" /></button>
            
            </div>

            
          </div>
        </div>
      </div>

      <div className="wallet-boost">
        <button className="btn-boost">
          Boost
        </button>
      </div>

      <div className="transaction">
        <span className="transaction-text">Connect to your wallet</span>
      </div>
      
      <div className="wallet-connects">
      <div id="connect"></div>
      </div>

 
      



    </>
  );
};

export default home;
