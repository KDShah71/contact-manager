import React, { Component } from 'react';
import { Consumer } from '../../Context';
// import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    error: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async (dispatch, e) => {
    const { name, email, phone } = this.state;

    e.preventDefault();

    if (name === '') {
      this.setState({ error: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ error: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ error: { phone: 'Phone is required' } });
      return;
    }

    const updContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    );

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    this.setState({
      name: '',
      email: '',
      phone: '',
      error: {}
    });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, error } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    id="name"
                    className="form-control form-control-lg mb-3"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={error.name}
                  />

                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    className="form-control form-control-lg mb-3"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={error.email}
                  />

                  <TextInputGroup
                    label="Phone"
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control form-control-lg mb-3"
                    placeholder="Enter Number"
                    value={phone}
                    onChange={this.onChange}
                    error={error.phone}
                  />
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-dark btn-block bg-success"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
