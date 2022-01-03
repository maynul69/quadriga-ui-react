import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const Team = () => {
    return (
      <div>
        <Container>
          <div className="text-center">
            <h1 className="my-2 headline-design text-center">Our Team</h1>
          </div>
          <CardGroup className="my-4">
            <Card className="mx-2 border-0 card-design bg-dark text-light shadow p-3 mb-5  rounded ">
              <Card.Img
                style={{ width: "100%" }}
                variant="top"
                src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/270231642_2061717450662468_7079850237155988545_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGRaB0bGrhMuAX6BDuGYmy-FgHo9dkQirIWAej12RCKsi6eC8bOHDIGcuWoKLsQvlWYPZ4Uqy99N8vFGSvDXcJG&_nc_ohc=wPsNLKJ42D8AX8gc_Vg&_nc_ht=scontent.fdac135-1.fna&oh=00_AT-TQE5SRAer8Ef49T7sYKQeR2q2zGyFH0zLl3oLOlTLog&oe=61D2A4F0"
              />
              <Card.Body>
                <Card.Title className="title">MD. Maynul Hossain</Card.Title>
                <Card.Text>Team Leader</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2 border-0 card-design bg-dark text-light shadow p-3 mb-5  rounded">
              <Card.Img
                variant="top"
                src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/250418788_1005373403372699_7223622197095692526_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFT6pylJtTnqc_Zoq8ImRQsIA4Teymv5l8gDhN7Ka_mX53E20zChXbaGnPBhuiEHeMMcvruCSSRszIp8dyrHCO3&_nc_ohc=-GDiiDHVx0MAX-wfjxQ&_nc_ht=scontent.fdac135-1.fna&oh=00_AT-ZbuAMH1MmAYEMGkODSgjwb7blmcGjuCr3iUXokdU9dw&oe=61CCEC42"
              />
              <Card.Body>
                <Card.Title className="title">Farjana Urmi</Card.Title>
                <Card.Text>Team Member</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2 border-0 card-design bg-dark text-light shadow p-3 mb-5  rounded">
              <Card.Img
                variant="top"
                src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/260182523_3151416058518589_9162481124095601227_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHs8LrW804Wv7Ek9Hd5n6fmkr9-sRJi7oKSv36xEmLugpzGeEztgh3y8fr3MzIiziMEQxf5cOTPl8vKxls39cIk&_nc_ohc=vaPwKJgWlBwAX-rFDJv&_nc_ht=scontent.fdac135-1.fna&oh=00_AT8fqoAlLEdmzNoydgd36ndMe4J4XdTDMjo5EYdopfNjMQ&oe=61CB955F"
              />
              <Card.Body>
                <Card.Title className="title">Abdul Aziz</Card.Title>
                <Card.Text>Team Member</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>
    );
};

export default Team;