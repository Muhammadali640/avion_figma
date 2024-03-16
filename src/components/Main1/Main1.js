/* eslint-disable no-undef */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Main1.css";
import { useEffect } from "react";

const Main1 = () => {

  const [open, setOpen] = useState(false);
  const [main1 , setMain1] = useState();
  const [main2 , setMain2] = useState();

  const getData = async () => {
    const responsiv = await fetch("http://localhost:3000/data");
    const data = await responsiv.json();
    setMain1(data);
  }

  const getData1 = async () => {
    const responsiv = await fetch("http://localhost:3000/data1");
    const data = await responsiv.json();
    setMain2(data);
  }

  useEffect(() => {
    getData();
    getData1();
  }, [])



  return (
    <div className="banner">
      <h2>New ceramics</h2>
      <div className="boxes">
        {main1 &&
          main1.map((item, i) => {
            return (
              <Link
                // onClick={() => localStorage.setItem("ali", item.id)}
                to={`/products3/${item.id}`}
                className="box"
                key={i}
              >
                <div className="image">
                  <img src={item.image} alt="Images" />
                </div>
                <div className="box-text">
                  <h5>{item.name}</h5>
                  <h6>{item.price}</h6>
                </div>
              </Link>
            );
          })}
      </div>

      <div className={open ? "boxes boxes1 active" : "boxes boxes1"}>
        {main2 &&
          main2.map((iteam, i) => {
            return (
              <Link
                to={`/products3/${iteam.id}`}
                className="box"
                key={i}
              >
                <div className="image">
                  <img src={iteam.image} alt="Images" />
                </div>
                <div className="box-text">
                  <h5>{iteam.name}</h5>
                  <h6>{iteam.price}</h6>
                </div>
              </Link>
            );
          })}
      </div>

      <button className="btn" onClick={() => setOpen(!open)}>
        View collection 
      </button>
    </div>
  );
};

export default Main1;

// const data = "http://localhost:3000/data"

// const data1 = "http://localhost:3000/data1"


