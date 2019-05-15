const products = [
    { name: `Marshmallow Mateys`, price: 6.98 },
    { name: `Golden Honey O's`, price: 6.48 },
    { name: `Frosted Flakes`, price: 3.98 },
];

const productReducer = (state = products, action) => {
    if (action.type === 'ADD_NEW_PRODUCT') {
        return [...state, action.payload];
    }
    return state;
};

export default productReducer;