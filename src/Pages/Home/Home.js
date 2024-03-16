import React from "react";
import "./Home.css";
import Different from "../../components/Different/Different";
import Main1 from "../../components/Main1/Main1";
import Products from "../../components/Products/Products";
import Input1 from "../../components/input1/Input1";
import Form from "../../components/Form/Form";
import Footer1 from "../../components/Footer1/Footer1";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="brand">
        <div className="text-brand">
          <div className="lite-text">
            <h2>The furniture brand for the future, with timeless designs</h2>
            <button className="btn">View collection</button>
          </div>
          <p>
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
        <div className="img-brand">
          <img src="../images/Right Image.png" alt="photos"/>
        </div>
      </div>
      {/* Different */}
      <Different />
      {/* Main - 1 */}
      <Main1 />
      {/* Our popular products */}
      <Products />
      {/* Input - 1 */}
      <Input1 />
      {/* Form */}
      <Form />
      {/* Footer - 1 */}
      <Footer1 />
    </div>
  );
};

export default Home;
