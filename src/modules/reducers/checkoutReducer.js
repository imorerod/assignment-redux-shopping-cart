const checkoutReducer = (state = [], action) => {
    // TODO: Products added to the cart
    if(action.type === 'PRODUCT_TO_CART') {
        return [...state, action.payload];
    }else if (action.type === 'CLEAR_CART'){
        return [];
    }
        return state;
};

export default checkoutReducer;