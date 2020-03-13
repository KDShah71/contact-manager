import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';

import { FaCaretDown, FaPencilAlt } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  deleteHandler = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  // deleteHandler = (id, dispatch) => {
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
  // };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                {name}{' '}
                <span>
                  <FaCaretDown
                    style={{ cursor: 'pointer' }}
                    onClick={this.onShowClick}
                  />
                </span>
                <span
                  style={{
                    cursor: 'pointer',
                    float: 'right'
                  }}
                >
                  <Link to={`/contact/edit/${id}`}>
                    <FaPencilAlt
                      size={20}
                      onClick={this.deleteHandler.bind(this, id, dispatch)}
                    />
                  </Link>
                  <TiDeleteOutline
                    size={20}
                    onClick={this.deleteHandler.bind(this, id, dispatch)}
                  />
                </span>
              </div>
              {showContactInfo ? (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
