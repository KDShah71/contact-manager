import React, { Component } from 'react';
import Contact from './Contact';

export class Contacts extends Component {
  state = {
    contacts: [
      {
        id: '1',
        name: 'j',
        email: 'j@g.com',
        phone: '5-55-555'
      },
      {
        id: '2',
        name: 'K',
        email: 'j@g.com',
        phone: '5-55-555'
      },
      {
        id: '3',
        name: 'l',
        email: 'j@g.com',
        phone: '5-55-555'
      }
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </div>
    );
  }
}

export default Contacts;
