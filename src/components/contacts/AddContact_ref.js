import React, { Component } from 'react';
import { Consumer } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phone = React.createRef();
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
  };

  static defaultProps = {
    name: 'John DOe',
    email: 'f@g.com',
    phone: '12321231'
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control form-control-lg mb-3"
                    placeholder="Enter Name"
                    defaultValue={name}
                    onChange={this.onChange}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control form-control-lg mb-3"
                    placeholder="Enter Email"
                    defaultValue={email}
                    onChange={this.onChange}
                    ref={this.emailInput}
                  />
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="form-control form-control-lg mb-3"
                    placeholder="Enter Number"
                    defaultValue={phone}
                    onChange={this.onChange}
                    ref={this.phoneInput}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
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
