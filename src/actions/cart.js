import {
    CLEAR_CART,
    ADDTOCART,
    INCREASECART,
    DESCRESECART,
    REMOVEFROMCART,
    GETTOTALAMT
} from './types';
export const changeCart = () => {
    return {
        type: CLEAR_CART
    }
}
export const addtoCart = (proidararay) => {
    return {
        type: ADDTOCART,
        payload: proidararay
    }
}
export const removefromCart = (proid) => {
    return {
        type: REMOVEFROMCART,
        payload: proid
    }
}
export const increaseCart = (proid) => {
    return {
        type: INCREASECART,
        payload: proid
    }
}
export const descreaseCart = (proid) => {
    return {
        type: DESCRESECART,
        payload: proid
    }
}
export const gettotalamt = () => {
    return {
        type: GETTOTALAMT
    }
}