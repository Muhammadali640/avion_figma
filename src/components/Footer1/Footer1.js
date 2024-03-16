import React from "react";
import "./Footer1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faInstagram,
  faSkype,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <div className="footer">
      <div className="fot-top">
        <div className="fot-link">
          <ul>
            <li>
              <Link>Menu</Link>
            </li>
            <li>
              <Link>New arrivals</Link>
            </li>
            <li>
              <Link>Best sellers</Link>
            </li>
            <li>
              <Link>Recently viewed</Link>
            </li>
            <li>
              <Link>Popular this week</Link>
            </li>
            <li>
              <Link>All products</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Menu</Link>
            </li>
            <li>
              <Link>New arrivals</Link>
            </li>
            <li>
              <Link>Best sellers</Link>
            </li>
            <li>
              <Link>Recently viewed</Link>
            </li>
            <li>
              <Link>Popular this week</Link>
            </li>
            <li>
              <Link>All products</Link>
            </li>
            <li>
              <Link>Crockery</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Menu</Link>
            </li>
            <li>
              <Link>New arrivals</Link>
            </li>
            <li>
              <Link>Best sellers</Link>
            </li>
            <li>
              <Link>Recently viewed</Link>
            </li>
            <li>
              <Link>Popular this week</Link>
            </li>
            <li>
              <Link>All products</Link>
            </li>
          </ul>
        </div>
        <div className="fot-inp">
          <h2>Join our mailing list</h2>
          <div className="input-int">
            <input
              className="email"
              type="email"
              placeholder="Enter your email"
            />
            <input className="btn2" type="submit" value={"Sign up"} />
          </div>
        </div>
      </div>
      <hr />
      <div className="fot-bot">
        <h5>Copyright 2022 Avion LTD</h5>
        <div className="fot-icon">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon
            icon={faSquareFacebook}
            style={{ color: "#ffffff" }}
          />
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon icon={faSkype} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon icon={faPinterest} style={{ color: "#ffffff" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer1;
