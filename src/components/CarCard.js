import React, { useState } from "react";
import carsData from "./CarsData";
import "../App.css";


const CarCard = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="car-card-container">
      {carsData.map((car) => {
        const { make, vin, year, horsepower, image, pricePerHour } = car;

        return (
          <div key={vin} className="car-card">
            <div className="car-card-header">
              <span className="car-year">{year}</span>
            </div>
            <div className="car-card-title">
              <h2>{make}</h2>
              <div className="car-horsepower">{horsepower} HP</div>
            </div>
            <div className="car-card-image">
              <img src={image} alt={make} />
            </div>
            <div className="car-card-footer">
              <button className="view-price-btn" onClick={() => openModal(car)}>
                View Price
              </button>
            </div>
          </div>
        );
      })}

      {selectedCar && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>
              &times;
            </button>
            <br></br>
            <p>
              <strong>Rental Price:</strong> ${selectedCar.pricePerHour}/hour
            </p>
            <img src={selectedCar.image} alt={selectedCar.make} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarCard;
