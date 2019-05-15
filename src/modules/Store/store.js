import { createStore, combineReducers, applyMiddleware } from 'redux';
import productReducer from '../reducers/productReducer';
import checkoutReducer from '../reducers/checkoutReducer';
import logger from 'redux-logger';

const storeInstance = createStore(
    combineReducers({
        productReducer,
        checkoutReducer
    }),
    applyMiddleware(logger)
);

export default storeInstance;