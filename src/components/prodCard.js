import React from "react";

const ProdCard = ({ prodData }) => {
  return (
    
    <div className="col-3">
      <div className="card">
        <img
          src={prodData.image}
          className="card-img-top"
          style={{ width: "200px", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{prodData.title}</h5>
          <p className="card-text">{/* {prodData.description} */}</p>
          <p>Price:{prodData.price}</p>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
