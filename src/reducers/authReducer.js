import {SIGN_IN,SIGN_OUT,CHECK_LOGINORNOT} from '../actions/types';
const INITIAL_STATE= {
    isSignedIn:null,
    userId : null
};
export default (state = INITIAL_STATE ,action ) => {
     switch(action.type){
         case SIGN_IN : 
                return { ...state , isSignedIn : true,userId : action.payload };
         case SIGN_OUT :
           return{ ...state , isSignedIn : false,userId :null };
           case CHECK_LOGINORNOT :

            return { ...state , isSignedIn : action.payload ,userId : action.data[0].id };
       default :
            return state;   
        
     }
};