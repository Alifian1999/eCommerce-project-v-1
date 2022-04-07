import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from "../types/type";
import API from '../API'

export const LoginController=(inputUser)=>async dispatch=>{
    try {
        console.log(inputUser.password+' ini adalah input');
        dispatch(userLoginRequest())
        const response= await API.get('/user/sign-in',inputUser)
        const users=response.data.result
        for(let i=0;i<users.length;i++){
        while(users[i].username===inputUser.username && users[i].password===inputUser.password){
            dispatch(userLoginSuccess())
            inputUser.navigate('/')
            return console.log(users[i].username) & console.log(users[i].password); 
            }
        }
        return inputUser.navigate('/sign-up')
    }catch (error) {
        dispatch(userLoginError(error))
    }
}

export const userLoginRequest=()=>{
    return{
        type:USER_LOGIN_REQUEST
    }
}

export const userLoginSuccess=(users)=>{
    return{
        type:USER_LOGIN_SUCCESS,
        payload: users,
        status:'success'
    }
}

export const userLoginError=(error)=>{
    return{
        type:USER_LOGIN_ERROR,
        payload: error
    }
}