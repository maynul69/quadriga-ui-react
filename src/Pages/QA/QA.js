import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Faq from './Faq/Faq';
import Question from './Question';

const QA = () => {
    return (
      <div>
        <Header></Header>
        <div
          className="row p-5 w-100"
          d-flex
          align-items-center
          justify-content-center
          style={{ height: "80vh" }}
        >
          <div className="col-md-6">
              <h4 className='py-4'>Questions, Most People ask</h4>
            <Faq></Faq>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <Question></Question>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default QA;