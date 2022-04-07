import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from "../types/type";

const initialState={
    username:'',
    password:''
}

export const userLoginReducers=(state=initialState, action)=>{
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return{
                status:'loading',
                loading:true,
                state: state
            }
        case USER_LOGIN_SUCCESS:
            return{
                status:true,
                loading:false,
                users:action.payload
            }
        case USER_LOGIN_ERROR:
            return{
                status:'error',
                loading:false,
                users:action.payload
            }
    
        default:
            return state
    }
}