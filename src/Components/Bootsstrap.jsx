import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";



const Bootsstrap = ({ city }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = () => {
    setCartCount(cartCount + 1);
    alert(`"${city.name}" added to cart! (Total Person For Travel: ${cartCount + 1})`);
  };
  

  
  return (
    <div className="container d-flex mb-5">
      <div className="card">
        <img src={city.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{city.name}</h5>
          <p className="card-text">{city.info}</p>
          <p className="card-text text-primary">Price: {city.price}</p>
          <button className="btn btn-primary" onClick={handleAdd}>
            Add to Cart ({cartCount})
          </button>
          <Link to={`/city-details/${city.id}`} className="btn btn-success">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bootsstrap;
