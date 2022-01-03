import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Faq from '../QA/Faq/Faq';
import Footer from '../Shared/Footer/Footer';

import Header from '../Shared/Header/Header';
import Team from '../Team/Team';
import AboutUsText from './AboutUsText/AboutUsText';

const About = () => {
    
    return (
      <div>
        <Header></Header>
        <AboutUsText></AboutUsText>
        <h2 className="py-3">FAQ</h2>
        <div
          className="row p-5 mx-auto shadow-lg  mb-5 bg-white rounded"
          style={{ width: "80%" }}
        >
          <div className="col-md-6">
            <Faq></Faq>
          </div>
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url("https://www.teachwire.net/uploads/news/iStock-826472146.jpg")`,
            }}
          >
            <Link to="/qa">
              <Button variant="dark" type="submit">
                Ask Your Question
              </Button>
            </Link>
          </div>
        </div>
        <Team></Team>
        <Footer></Footer>
      </div>
    );
};

export default About;