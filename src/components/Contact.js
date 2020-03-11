import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FaCaretDown } from 'react-icons/fa';

class Contact extends Component {
  state = {};

  onShowClick = () => {};

  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className="container">
        <div className="card mb-3">
          <div className="card-header">
            {name}{' '}
            <span>
              <FaCaretDown onClick={this.onShowClick} />
            </span>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        </div>
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
