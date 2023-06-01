import React from 'react';
import '../styles/Footer.css';
import {
  FaFacebook, FaGithub, FaLinkedin, FaEnvelopeOpen,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="container-fluid footer py-4">
      <div className="row row-80 d-flex justify-content-around align-items-center">
        {/* footer first child */}
        <div className="col mr-4">
          <a href="https://web.facebook.com/musong.ernestakeh/" target="blank" className="text-light">
            <FaFacebook />
          </a>
        </div>
        <div className="col mr-4">
          <a href="https://github.com/ernestmusong" target="blank" className="text-light">
            <FaGithub />
          </a>
        </div>
        <div className="col mr-4">
          <a href="https://www.linkedin.com/in/musong-ernest-921b73211/" target="blank" className="text-light">
            <FaLinkedin />
          </a>
        </div>
        <div className="col">
          <a href="mailto: mailto:ernestakeh@gmail.com " target="blank" className="text-light">
            <FaEnvelopeOpen />
          </a>
        </div>
      </div>
      {/* footer second child */}
      <div className="row d-flex flex-column justify-content-around align-items-center">
        <div>
          <p className="nav-and-footer-p">
            Copyright &copy;
            {' '}
            <span className="text-primary">Furniture Store</span>
            {' '}
            <span id="date">{new Date().getFullYear()}</span>
            {' '}
            <span className="nav-and-footer-p ml-2">All rights reserved</span>

          </p>
        </div>
        <div>
          <p className="nav-and-footer-p text-center text-capitalize text-muted">
            powered by React + Redux
          </p>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
