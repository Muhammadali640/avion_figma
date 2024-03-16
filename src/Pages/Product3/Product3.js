import React, { useEffect, useState } from "react";
import "./Product3.css";
import useFetch from "../../hooks/useFetch";
// import { Link } from "react-router-dom";

const Ceramics = (id) => {
  // eslint-disable-next-line no-unused-vars
  const [url, setUrl] = useState("http://localhost:3000/data");
  // eslint-disable-next-line no-unused-vars
  const { data, error, isPending } = useFetch(url);

  useEffect(() => {
    if(id > 8){
      setUrl(`http://localhost:3000/data1`)   
    }
    if(id > 16){
      setUrl(`http://localhost:3000/products`)   
    }
    if(id > 22){
      setUrl(`http://localhost:3000/products1`)   
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , []);
  return (
    <div>
      
    </div>
  );
};

export default Ceramics;
