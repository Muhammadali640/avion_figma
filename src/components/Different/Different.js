import React from "react";
import "./Different.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faCheck,
  faWallet,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

const Different = () => {
  return (
    <div className="different">
      <h2>What makes our brand different</h2>
      <div className="boxes">
        <div className="box">
          <FontAwesomeIcon icon={faTruck} />
          <div className="box-text">
            <h5>Next day as standard</h5>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faCheck} />
          <div className="box-text">
            <h5>Made by true artisans</h5>
            <p>
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faWallet} />
          <div className="box-text">
            <h5>Unbeatable prices</h5>
            <p>
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faTree} />
          <div className="box-text">
            <h5>Recycled packaging</h5>
            <p>
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
