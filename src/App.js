import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import Contacts from './components/contacts/Contacts';
import { Provider } from './Context';
import AddContact from './components/contacts/AddContact';

// import FormInput from './components/FormInput';
// import { Consumer } from './Context';

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar branding="Contact Manager" />
        <div className="container">
          <AddContact />

          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
