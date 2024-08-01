import React from "react";
import "./invite.css";
import { FaCopy } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import Tonup from "../../assets/tonup.png";

const invite = () => {
  return (
    <>
      <div className="invite-container">
        <div className="invite">
          <div className="invite-text">
            <div className="invite-text-title">Invite Friends!</div>
            <div className="invite-text-subtitle">
              <span className="invite-text-span">
                You and your friends will receive bonuses
              </span>
            </div>
          </div>
          <div className="invite-link">
            <div className="invite-link-title">Referal link</div>
            <div class="copy-container">
              <input
                type="text"
                disabled
                className="invite-link-input"
                value="https://tonswap.io"
                readOnly
                onClick={() =>
                  navigator.clipboard.writeText("https://tonswap.io")
                }
              />
              <button className="copy-btn">
                <FaCopy />
              </button>
            </div>
            <div className="invite-buttons">
              <button className="invite-btn">Invite Friend</button>
            </div>
          </div>
        </div>
        <hr className="invite-hr" />
      </div>
      <div className="friends-list">
        <div className="friends-list-title">Friends</div>
        <div className="friends-list-container">
          <div className="friends-list-item">
            <div className="referal-info">
              <div className="image">
                <FaUserGraduate className="referal-icon" />
              </div>
              <div className="name">Kimdur</div>
            </div>
            <div className="referal-balance">
              <img src={Tonup} alt="" className="referal-balance-img" /> 6000
            </div>
          </div>
          <div className="friends-list-item">
            <div className="referal-info">
              <div className="image">
                <FaUserGraduate className="referal-icon" />
              </div>
              <div className="name">Kimdur</div>
            </div>
            <div className="referal-balance">
              <img src={Tonup} alt="" className="referal-balance-img" /> 6000
            </div>
          </div>
          <div className="friends-list-item">
            <div className="referal-info">
              <div className="image">
                <FaUserGraduate className="referal-icon" />
              </div>
              <div className="name">Kimdur</div>
            </div>
            <div className="referal-balance">
              <img src={Tonup} alt="" className="referal-balance-img" /> 6000
            </div>
          </div>
          <div className="friends-list-item">
            <div className="referal-info">
              <div className="image">
                <FaUserGraduate className="referal-icon" />
              </div>
              <div className="name">Kimdur</div>
            </div>
            <div className="referal-balance">
              <img src={Tonup} alt="" className="referal-balance-img" /> 6000
            </div>
          </div>

          <div className="friends-list-item">
            <div className="referal-info">
              <div className="image">
                <FaUserGraduate className="referal-icon" />
              </div>
              <div className="name">Kimdur</div>
            </div>
            <div className="referal-balance">
              <img src={Tonup} alt="" className="referal-balance-img" /> 6000
            </div>
          </div>

          <div className="friends-list-item">
            <div className="referal-info">
              <div className="image">
                <FaUserGraduate className="referal-icon" />
              </div>
              <div className="name">Kimdur</div>
            </div>
            <div className="referal-balance">
              <img src={Tonup} alt="" className="referal-balance-img" /> 6000
            </div>
          </div>

          <div className="friends-list-item">
            <div className="referal-info">
              <div className="image">
                <FaUserGraduate className="referal-icon" />
              </div>
              <div className="name">Kimdur</div>
            </div>
            <div className="referal-balance">
              <img src={Tonup} alt="" className="referal-balance-img" /> 6000
            </div>
          </div>

          <div className="friends-list-item">
            <div className="referal-info">
              <div className="image">
                <FaUserGraduate className="referal-icon" />
              </div>
              <div className="name">Kimdur</div>
            </div>
            <div className="referal-balance">
              <img src={Tonup} alt="" className="referal-balance-img" /> 6000
            </div>
          </div>

          <div className="friends-list-item">
            <div className="referal-info">
              <div className="image">
                <FaUserGraduate className="referal-icon" />
              </div>
              <div className="name">Kimdur</div>
            </div>
            <div className="referal-balance">
              <img src={Tonup} alt="" className="referal-balance-img" /> 6000
            </div>
          </div>
          <div className="friends-list-item">
            <div className="referal-info">
              <div className="image">
                <FaUserGraduate className="referal-icon" />
              </div>
              <div className="name">Kimdur</div>
            </div>
            <div className="referal-balance">
              <img src={Tonup} alt="" className="referal-balance-img" /> 6000
            </div>
          </div>




        </div>
      </div>
    </>
  );
};

export default invite;
