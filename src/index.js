import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import storeInstance from './modules/Store/store';

// Redux
import { Provider } from 'react-redux';

// Default set of products

// Array of products, this reducer is complete

// Items in the cart, this reducer is incomplete

// The store is the big JavaScript Object that holds all of the information for our application
// Wrap our App in a Provider, this makes Redux available in
// our entire application

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));