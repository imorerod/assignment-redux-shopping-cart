import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/Connect/connect';

class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.dispatch({
            type: 'CLEAR_CART'
        })
        this.props.history.push('/');
    }

    render() {
        console.log(this.props.reduxState.checkoutReducer);
        const htmlArray = this.props.reduxState.checkoutReducer.map((item, index) => {
            return (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            )
        });

        return (
            <div>
                <h2>Checkout</h2>
                {/* TODO: Display items in the cart */}
                {htmlArray}
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Checkout);