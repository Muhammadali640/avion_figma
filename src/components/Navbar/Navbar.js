import { Link , NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faCircleUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [show , setShow] = useState(false) ;

  return (
    <div className="navbar">
      <div className="nav-top">
        <NavLink to={"search"}><FontAwesomeIcon to={"search"} className="search" style={{color:"#000000"}} icon={faMagnifyingGlass} /></NavLink>
        <Link to={"/"} className="avion">Avion</Link>
        <div className="nav-icon">
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faCircleUser} />
        </div>
        <div className="nav-icon new-icon">
          <NavLink to={"search"}> <FontAwesomeIcon to={"search"} className="search1" style={{color:"#000000"}} icon={faMagnifyingGlass} /></NavLink>
          <FontAwesomeIcon onClick={() => setShow(true)} icon={faBars} />
        </div>
      </div>
      <hr/>
      <div className="nav-bot">
          <ul>
            <li><Link to={"/"}>Plant pots</Link></li>
            <li><Link to={"ceramics"}>Ceramics</Link></li>
            <li><Link to={"tables"}>Tables</Link></li>
            <li><Link to={"chairs"}>Chairs</Link></li>
            <li><Link to={"crockery"}>Crockery</Link></li>
            <li><Link to={"tableware"}>Tableware</Link></li>
            <li><Link to={"cutlery"}>Cutlery</Link></li>
          </ul>
      </div>
      <div className={show?"open1 active":"open1"}>
        <FontAwesomeIcon className="exit" onClick={()=> setShow(false)} icon={faXmark} />
      <ul>        
            <li><Link to={"/"}>Plant pots</Link></li>
            <li><Link to={"ceramics"}>Ceramics</Link></li>
            <li><Link to={"tables"}>Tables</Link></li>
            <li><Link to={"chairs"}>Chairs</Link></li>
            <li><Link to={"crockery"}>Crockery</Link></li>
            <li><Link to={"tableware"}>Tableware</Link></li>
            <li><Link to={"cutlery"}>Cutlery</Link></li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
