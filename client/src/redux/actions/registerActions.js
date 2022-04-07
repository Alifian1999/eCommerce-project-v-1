import API from '../API'
import {USER_REGISTRATION_SUCCESS,USER_REGISTRATION_ERROR} from '../types/type'

export const RegistrationController=(inputUser)=> async (dispatch)=>{
    try {
        const compare = await API.get('/product/all')
        const response =await API.post(`/user/register`,inputUser) //parameter= data
        const users = response.data
        const dataCompare = compare.data.result
        for(let i=0;i<dataCompare.length;i++){
           while(dataCompare[i].username===inputUser.username){
               return dispatch(userRegistrationError())
           }
        }
        dispatch(userRegistrationSuccess(users))
        inputUser.navigate('/sign-in')
    } catch (error) {
        dispatch(userRegistrationError(error))
    }
    
}


const userRegistrationSuccess=(users)=>{
    return{
        type: USER_REGISTRATION_SUCCESS,
        payload: users
    }
}

const userRegistrationError=(error)=>{
    return{
        type: USER_REGISTRATION_ERROR,
        payload: error
    }
}