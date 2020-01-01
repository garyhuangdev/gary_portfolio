import React from 'react';
import gmailImg from '../../images/gmail.png';
import phoneImg from '../../images/phone.png';
import linkedinImg from '../../images/linkedin.png';

const Contact = () => (
  <section className="contact">
    <div className="section-head">
      <h2 className="text-center">Contact</h2>
      <div className="underline" />
    </div>
    <div className="row">
      <div className="col-md-6 mx-auto contact-info">
        <p>
          <img src={phoneImg} alt="phonePic" />
          <span>(61) 0411896882</span>
        </p>
      </div>
      <div className="col-md-6 mx-auto contact-info">
          <p>        
            <a
              href="mailto:garyhuang.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gmailImg} alt="gmailPic" />
              <span>garyhuang.dev@gmail.com</span>
            </a>
          </p>
      </div>
      <div className="col-md-6 mx-auto contact-info">
        <p>
          <a
            href="https://www.linkedin.com/in/garyhuang-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinImg} alt="linkedinPic" />
            <span>https://www.linkedin.com/in/garyhuang-dev/</span>
          </a>
        </p>
      </div>
      <div className="col-md-6 mx-auto contact-info">
        <p>
        </p>
      </div>
    </div>
    <div className="contact-words">
      "Try not to become a man of success, but rather try to become a man of value."  - Albert Einstein
    </div>
  </section>
);


export default Contact;
