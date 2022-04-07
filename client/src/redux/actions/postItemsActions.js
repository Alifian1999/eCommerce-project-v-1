import API from '../API/index'
import { POST_ITEMS_SUCCESS, POST_ITEMS_ERROR, POST_ITEMS_REQUEST } from '../types/type'


export const postItems = (data) => async dispatch =>{
    try {
        dispatch(postItemsRequest())
        const database = await API.post('/post-items',data)
        const inputUser = database.data
       dispatch(postItemsSuccess(inputUser))
    } catch (error) {
       dispatch(postItemsError(error))
    }
}

const postItemsRequest=()=>{
    return{
        type : POST_ITEMS_REQUEST
    }
}

const postItemsSuccess=(database)=>{
    return{
        type : POST_ITEMS_SUCCESS,
        payload : database
    }
}

const postItemsError=(error)=>{
    return{
        type : POST_ITEMS_ERROR,
        payload : error
    }
}