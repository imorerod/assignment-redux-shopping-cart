import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/Connect/connect';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import App from '../App/App';

class ProductListItem extends Component {

    addProductToCart = () => {
        console.log(this.props.product);
        // TODO: Dispatch here
        this.props.dispatch({ type: 'PRODUCT_TO_CART', payload: this.props.product });

    }

    render() {
        return (
            <li>
                {this.props.product.name}:
                {this.props.product.price}
                <Fab
                    color="secondary"
                    aria-label="Add"
                    size="small"
                    onClick={this.addProductToCart}
                >
                <AddIcon />
                </Fab>
            </li>
        )
    }
}

export default connect(mapReduxStateToProps)(ProductListItem);