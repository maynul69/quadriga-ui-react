import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCar from '../SingleCar/SingleCar';

const Cars = () => {

  const [cars, setCars] = useState([]);
  const limited = cars.slice(0, 6);
  console.log(limited);

  useEffect(() => {
    fetch("./databse.JSON")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

    return (
      <div className="row mx-auto">
        <h2 className="my-5 py-2 w-25 mx-auto">Cars For You</h2>
        <div className="row ">
          {limited.map((car) => (
            <SingleCar car={car}></SingleCar>
          ))}

          <Link to='/explore'>
            <button className="btn btn-dark my-5">See All The Cars</button>
          </Link>
        </div>
      </div>
    );
};

export default Cars;