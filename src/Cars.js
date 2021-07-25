import React, { useState, useEffect } from "react";

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCars(data);
      });
  }, []);
  return (
    <div>
      {cars.map((car) => {
        return <div>{car.make}</div>;
      })}
    </div>
  );
}
