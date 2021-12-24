import {
    CLEAR_CART,
    ADDTOCART,
    INCREASECART,
    DESCRESECART,
    REMOVEFROMCART,
    GETTOTALAMT
} from '../actions/types';

const initialStorecart = {
    cart: [],
    total: 0,
    amount: 0
};

const changeCartinpro = (state = initialStorecart, action) => {
    switch (action.type) {
        case CLEAR_CART:
            {
                return {...state, cart: [] };
            }
        case ADDTOCART:
            {
                let tempCart = state.cart;
                if (tempCart.length === 0) {
                    tempCart = [...tempCart, action.payload];
                    console.log("length <0");
                    console.log(tempCart);
                    return {...state, cart: tempCart };
                } else {
                    var check = 0;
                    tempCart = state.cart.map(cartItem => {
                        if (cartItem.id === action.payload.id) {
                            cartItem = {...cartItem, qty: cartItem.qty + 1, subamout: cartItem.price * (cartItem.qty + 1) };
                            console.log("exits");
                            check = 1;
                        }
                        return cartItem;
                    });

                    if (check === 0) {
                        console.log("not exits");
                        tempCart = [...tempCart, action.payload];
                    }
                    return {...state, cart: tempCart };

                }
            }

        case INCREASECART:
            {
                let tempCart = state.cart.map(cartItem => {
                    if (cartItem.id === action.payload) {
                        cartItem = {...cartItem, qty: cartItem.qty + 1, subamout: cartItem.price * (cartItem.qty + 1) };
                    }
                    return cartItem;
                });
                return {...state, cart: tempCart };
            }


        case DESCRESECART:
            {
                let tempCart = state.cart.map(cartItem => {
                    if (cartItem.id === action.payload) {
                        cartItem = {...cartItem, qty: cartItem.qty - 1, subamout: cartItem.price * (cartItem.qty - 1) };
                    }
                    return cartItem;
                });
                return {...state, cart: tempCart };
            }


        case REMOVEFROMCART:
            {
                return {
                    ...state,
                    cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
                };
            }

        case GETTOTALAMT:
            {
                let { total, qty } = state.cart.reduce(
                    (cartTotal, cartItem) => {
                        const { price, qty } = cartItem;
                        const itemTotal = price * qty;

                        cartTotal.total += itemTotal;

                        return cartTotal;
                    }, {
                        total: 0,
                    }
                );
                total = parseFloat(total.toFixed(2));
                console.log(total);
                return {...state, total };
            }

        default:
            return state;
    }
}

export default changeCartinpro;