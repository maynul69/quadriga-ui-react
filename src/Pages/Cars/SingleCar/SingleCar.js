import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleCar = (props) => {
    const { title, cost, duration, img } = props.car;

    return (
      <div className="col-md-4 mb-4 ">
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Img
            variant="top"
            src={img}
            className="img-fluid"
            style={{  margin: "auto", width: "370px", height: "247px" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Subscription Fee: <b>{cost}</b>
              <br />
              Duration: {duration}
            </Card.Text>
            <Button variant="dark">Subscribe</Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default SingleCar;