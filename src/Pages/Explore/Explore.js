import React, { useEffect, useState } from 'react';
import SingleCar from '../Cars/SingleCar/SingleCar';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Explore = () => {
    const [cars, setCars]=useState([]);

    useEffect(()=>{
        fetch("./databse.JSON")
        .then (res=>res.json())
        .then (data=>setCars(data));
    },[])
    return (
      <div>
        <div>
          <Header></Header>
        </div>
        <h2 className="my-5 py-2 w-25 mx-auto">Cars For You</h2>
        <div className="row w-100">
          {cars.map((car) => (
            <SingleCar car={car}></SingleCar>
          ))}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Explore;