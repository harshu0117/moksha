import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import carlogo from '../imag/Moksha.jpg';
import './Navbar.css'; 

const Navbar = () => {
  const [navBackground, setNavBackground] = useState('transparent');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground('green');
    } else {
      setNavBackground('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark sticky-top ${navBackground === 'green' ? 'bg-green' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={carlogo}
            height="40" // Larger logo size
            className="d-inline-block align-top"
            alt="Motorsport Club logo"
          />
          MOKSHA
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link "  to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link "  to="/ebaja">About E-baja</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sponsors">Sponsors</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about/car">Car</Link></li>
                <li><Link className="dropdown-item" to="/about/team">Team</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
