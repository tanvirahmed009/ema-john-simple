import React from 'react';

const Cart = (props) => {
    const { length } = props.cart
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Items: {length}</p>
        </div>
    );
};

export default Cart;