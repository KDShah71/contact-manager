import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar branding="Contact Manager" />

      <Contacts />
    </div>
  );
}

export default App;
