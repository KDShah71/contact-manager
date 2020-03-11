import React from 'react';
import { FaAddressBook } from 'react-icons/fa';
import PropTypes from 'prop-types';

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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
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
