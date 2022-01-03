import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
      <div className="container mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100  "
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Find the Perfect car for you</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100 img-fluid"
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Take any car at anywhere without even buying it</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100 img-fluid"
              src="https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Can Subscribe For As Short As 3 Days</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;