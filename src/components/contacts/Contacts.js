import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../Context';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div>
              <Link to="/contact/add">
                <FaPlus size={50} className="text-danger" />
              </Link>
              {contacts.map(contact => {
                return <Contact key={contact.id} contact={contact} />;
              })}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
