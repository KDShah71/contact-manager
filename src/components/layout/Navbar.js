import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaAddressBook, FaHome, FaQuestion, FaPlus } from 'react-icons/fa';

function Navbar(props) {
  const { branding } = props;
  return (
    <nav className="navbar navbar-dark bg-danger mb-5  ">
      <div className="container">
        <a className="navbar-brand" href="#top">
          <span style={{ color: 'white' }}>
            <FaAddressBook size={32} /> {branding}
          </span>
        </a>
        <div>
          <ul
            className="navbar-nav mr-auto "
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <li className="nav-item ml-4">
              <Link to="/test" className="nav-link">
                <FaPlus /> Test
              </Link>
            </li>
            <li className="nav-item ml-4">
              <Link to="/" className="nav-link">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item ml-4">
              <Link to="/about" className="nav-link">
                <FaQuestion /> About
              </Link>
            </li>
            <li className="nav-item ml-4">
              <Link to="/contact/add" className="nav-link">
                <FaPlus /> Add Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  branding: 'My App'
};

Navbar.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Navbar;
