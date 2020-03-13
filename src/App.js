import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import Contacts from './components/contacts/Contacts';
import { Provider } from './Context';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route
                exact
                path="/contact/edit/:id"
                component={EditContact}
              ></Route>
              <Route exact path="/test" component={Test}></Route>
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
