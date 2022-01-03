import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Question = () => {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ask Your Question</Form.Label>
            <Form.Control as="textarea" rows={3} className='p-5 py-5'/>
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
};

export default Question;