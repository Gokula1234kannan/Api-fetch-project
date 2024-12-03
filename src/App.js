import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "bootstrap";
import ProdCard from "./components/prodCard";

//setting a usestate
function App() {
  const [prodData, setProdData] = useState();

  // fetching for the buttonnp

  const handleFetchAPI = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      const resp = await response.data;
      console.log(resp);
      setProdData(resp);
    } catch (error) {
      console.log("error");
    }
  };
  // mapping the object for loop

  return (
    <div className="container">
      <div className="row">
        {prodData &&
          prodData.map((prodData) => {
            return <ProdCard prodData={prodData} />;
          })}
      </div>
      {/* button for the fetch api */}

      <button className="btn btn-primary" onClick={handleFetchAPI}>
        Fetch API
      </button>
    </div>
  );
}

export default App;
