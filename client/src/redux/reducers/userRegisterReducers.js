import { USER_REGISTRATION_SUCCESS, USER_REGISTRATION_ERROR } from "../types/type";

const initialState={
    username:[],
    password:[],
    error:'',
    isLogin:false,
    initial:false
}

export const userRegisterReducers=( state = initialState, action)=>{
    switch (action.type) {
        
        case USER_REGISTRATION_SUCCESS :
            return {
                status: 'success',
                loading : false,
                users: action.payload,
                isLogin:true,
                initial:true
            }
        
        case USER_REGISTRATION_ERROR :
            return {
                status : 'error',
                loading : false,
                error : action.payload,
                initial:true
            } 
        default:
            return state;
    }
}