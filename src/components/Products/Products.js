import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom" ;

const Products = () => {
  const [open, setOpen] = useState(false);
  const [sss , setSss] = useState();
  const [sss1, setSss1] = useState();

  const getApi = async () => {
    const request = await fetch("http://localhost:3000/products");
    const data = await request.json();
    setSss(data)
  }

  const getApi1 = async () => {
    const request = await fetch("http://localhost:3000/products1");
    const data = await request.json();
    setSss1(data)
  }

  useEffect(() => {
    getApi()
  },[])

  useEffect(() => {
    getApi1()
  },[]);




  return (
    <div className="products">
      <h2>Our popular products</h2>
      <div className="boxes">
        {sss &&
          sss.map((iteam, i) => {
            return (
              <Link to={"products3"} className="box" key={i}>
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

      <div className={open ? "boxes boxes1 active" : "boxes boxes1"}>
        {sss1 &&
          sss1.map((iteam, i) => {
            return (
              <Link  to={"Products3"} className="box" key={i}>
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

export default Products;
