import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
      <div>
        
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>A Do you Sell Cars?</Accordion.Header>
              <Accordion.Body>
                <strong>Quadriga</strong> Doesn't sell Cars. Here in quardriga,
                car owners posts their ads and customers can rent the cars from
                them for how long they want.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                As A customer, what files I have to submit?
              </Accordion.Header>
              <Accordion.Body>
                You <strong>must </strong> sumbit a scanned copy, a photo and a
                scanned copy of your NID in order to subscribe a car
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What security you provide to the car owners?
              </Accordion.Header>
              <Accordion.Body>
                if there's any <strong>unwanted</strong> situation between the
                owner and subscriber, quadriga has both of their documents than
                quadriga will provide to the law enforcement authority if
                needed.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
};

export default Faq;