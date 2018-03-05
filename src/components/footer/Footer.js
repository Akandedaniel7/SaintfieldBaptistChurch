import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
  return (
      <div className="footer">
        <div className="footer-links">
          <Link to="/">Home</Link><span className="footer-link-slash">/</span>
          <Link to="/about">About</Link><span className="footer-link-slash">/</span>
          <Link to="/meetings">Meetings</Link><span className="footer-link-slash">/</span>
          <a href="/bulletin/bulletin.pdf" target="_blank">Bulletin</a><span className="footer-link-slash">/</span>
          <Link to="/live">Watch</Link><span className="footer-link-slash">/</span>
          <Link to="/sermons">Sermons</Link><span className="footer-link-slash">/</span>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="row">
          <div className="col-sm">
            <p>Saintfield Baptist Church<br/>51 Crossgar Road, Saintfield<br/>2018 &copy; Saintfield Baptist Church</p>
          </div>
          <div className="col-sm">
            <p className="footer-social-title">STAY CONNECTED</p>
            <div className="footer-social-links">
              <a href="https://www.facebook.com/Saintfield-Baptist-Church-105178506183089/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/SaintfieldBC"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div className="col-sm d-sm-none d-md-block">
            <img alt="footer-logo" srcSet="img/logo_footer@2x.png 2x" className="footer-logo float-right" src="img/logo_footer.png"/>
          </div>
        </div>
      </div>
    )
};

export default Footer;
