import React, { Component } from 'react';
import './App.css';
// Shorthand import, {} in import is called destructuring
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import Products from '../Products/Products.js';
import Checkout from '../Checkout/Checkout.js';
import mapReduxStateToProps from '../../modules/Connect/connect';
import '../../../src/index.css';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fbc02d',
    },
    secondary: {
      main: '#D97904',
    },
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <h1>Redux Shopping Cart</h1>

          <Router>
            <div>
              <ul className="nav">
                <li>
                  <Link to="/">Product</Link>
                </li>
                <li>
                  <Link to="/checkout">Checkout</Link>
                </li>
              </ul>
              <Route exact path="/" component={Products} />
              <Route exact path="/checkout" component={Checkout} />
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
        );
      }
    }
    
export default connect(mapReduxStateToProps)(App);