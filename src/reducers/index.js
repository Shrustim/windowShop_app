import { combineReducers } from "redux";
import authReducer from './authReducer';
import changeCartinpro from './cart';

export default combineReducers({
    auth : authReducer,
    cart :changeCartinpro
});