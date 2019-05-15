import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/Connect/connect';

class ProductListItem extends Component {

    addProductToCart = () => {
        console.log(this.props.product);
        // TODO: Dispatch here
        this.props.dispatch({type: 'PRODUCT_TO_CART', payload : this.props.product});
        
    }

    render() {
        return (
            <li>
                {this.props.product.name}: {this.props.product.price} <button onClick={this.addProductToCart}>Add to Cart</button>
            </li>
        )
    }
}

export default connect(mapReduxStateToProps)(ProductListItem);