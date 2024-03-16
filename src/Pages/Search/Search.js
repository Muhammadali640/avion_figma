import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Main1 from "../../components/Main1/Main1";
import Different from "../../components/Different/Different";
import Products from "../../components/Products/Products";
import Form from "../../components/Form/Form";
import Footer1 from "../../components/Footer1/Footer1";

const Seach = () => {
  return (
    <div>
      {/* Search input */}
      <div className="search1">
        <div className="input_1">
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
          <input
            type="text"
            className="search_input"
            placeholder="Enter your some text..."
          />
        </div>
      </div>
      {/* Different */}
      <Different />
      {/* Min - 1 */}
      <Main1 />
      {/* Our popular products */}
      <Products />
      {/* From Pages */}
      <Form />
      {/* Footer - 1 */}
      <Footer1 />
    </div>
  );
};

export default Seach;
