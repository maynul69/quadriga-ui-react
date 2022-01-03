import React from 'react';
import { Link } from 'react-router-dom';
import carimg from '../../../images/istockphoto-1320822416-612x612.jpg'

const AboutUsText = () => {
    return (
      <div>
        <h1 className='py-4'>Welcome To Quadriga</h1>
        <div
          className="row p-5 d-flex align-items-center shadow-lg  mb-5 bg-white rounded "
          style={{ width: "80%", margin: "auto" }}
        >
          <div className="col-md-6 col-sm-12  ">
            <p className="mx-auto">
              Owning a car (sometimes more than one) feels like a necessety
              sometimes and sometimes like a dream. But because of our
              circumstances or situation, we can't do that. This is why quadriga
              is here. <br />
              To give you your own car , without buying it. Just subscibe it,
              pay a little subscription fee and ride your own car. Can change it
              whenever you get bored of your car and grab another one. <br />
              <b>No Hidden Cost</b> <br /> <b>No Extra Service Charge</b> <br />{" "}
              <b>Just You And Your Car</b>
            </p>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <h5>Know More...</h5>
              {/* <button className="btn btn-dark my-5">Know More...</button> */}
            </Link>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className="img-fluid" src={carimg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default AboutUsText;