import { GET_BARANG_REQUEST, GET_BARANG_SUCCESS, GET_BARANG_ERROR } from "../types/type"
import { GET_ITEMS_ID_REQUEST, GET_ITEMS_ID_SUCCESS, GET_ITEMS_ID_ERROR } from "../types/type"

const initialState = {
    users : [],
    loading : true
}

export const getBarangReducers=( state = initialState, action)=>{
    switch (action.type) {
        case GET_BARANG_REQUEST :
            return{
                ...state,
                loading : true,
                status : 'loading'
            }
        case GET_BARANG_SUCCESS :
            return{
                loading : false,
                status : 'success',
                users : action.payload
            }
        case GET_BARANG_ERROR :
            return{
                loading : false,
                error : action.payload,
                status : 'error'
            }

        default : 
            return state
    }
}

export const getItemsByIdReducers=(state= initialState, actions)=>{
    switch(actions.type){
        case GET_ITEMS_ID_REQUEST:
            return{
                loading : true,
                ...state,
                status : 'loading'
            }
        case GET_ITEMS_ID_SUCCESS :
            return{
                loading : false,
                status : 'success',
                users : actions.payload
            }
        case GET_ITEMS_ID_ERROR :
            return{
                loading:false,
                status:'error',
                error:actions.payload
            }
            default:
                return state
    }
}