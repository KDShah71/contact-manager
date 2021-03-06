import React, { Component } from 'react';
import { Consumer } from '../../Context';
// import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import Axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    error: {}
  };

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

    const newContact = {
      name,
      email,
      phone
    };

    const res = await Axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );
    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    // Axios.post(
    //   'https://jsonplaceholder.typicode.com/users',
    //   newContact
    // ).then(res => dispatch({ type: 'ADD_CONTACT', payload: res.data }));

    // dispatch({ type: 'ADD_CONTACT', payload: { ...this.state, id: uuidv4() } });
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
              <div className="card-header">Add Contact</div>
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
                    type="number"
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
                    value="Add Contact"
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

export default AddContact;
