import React, { useEffect, useState } from "react";
import data from "../data";
import { useParams } from "react-router-dom";

const CityDetails = () => {
  const [city, setCity] = useState(null);
  const { ID } = useParams();

  useEffect(() => {
    const selectedCity = data.find((c) => c.id === Number(ID));
    setCity(selectedCity);
  }, [ID]);

  if (!city) {
    return <p>City not found</p>;
  }

  return (
    <>
      <div
        className="container-fluid shadow"
        style={{ color: "white", marginBottom: "500px" }}
      >
        <div className="row">
          <div className="col-12" style={{ color: "red" }}>
            <h1>{city.name}</h1>
          </div>
          <div className="col-12">
            <p>{city.info}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityDetails;
