import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../css/style.css";

const Footer = () => (
  <footer className="footer" href='#Footer'>
    <Container>
      <Row>
        <Col md={4} className="footer-section">
          <h4>MAKING SPECIALTY COFFEE</h4>
          <p>YOUR DAILY CUP OF HAPPINESS</p>
        </Col>
        <Col md={4} className="footer-section">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/partnerships">Partnerships</a></li>
            <li><a href="/subscription-cards">Subscription Cards</a></li>
            <li><a href="/help">Help</a></li>
          </ul>
        </Col>
        <Col md={4} className="footer-section">
          <h5>Policies</h5>
          <ul className="footer-links">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
            <li><a href="/shipping-policy">Shipping Policy</a></li>
            <li><a href="/return-cancellation">Return & Cancellation</a></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="footer-contact">
          <p>abCoffee, 2nd Floor, 18, Sultania House, Subhash road, Vile Parle East, Mumbai 400057</p>
          <p>support@abcoffee.in</p>
          <p>CIN: U15130MH2022PTC379947</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
