import { GET_BARANG_REQUEST, GET_BARANG_SUCCESS, GET_BARANG_ERROR } from "../types/type"
import { GET_ITEMS_ID_REQUEST, GET_ITEMS_ID_SUCCESS, GET_ITEMS_ID_ERROR } from "../types/type"
import API from '../API'



export const getAllBarang = ()=> async dispatch=>{
    try {     
        dispatch(getBarangRequest())
        const response= await API.get(`/product/all`) 
        const users = response.data
        dispatch(getBarangSuccess(users))
    } catch (error) {
        dispatch(getBarangError(error))
    }
}

export const getItemsById=(params)=> async dispatch=>{
    try {
        dispatch(getItemsByIdRequest())
        let id = params
        const response = await API.get(`/product/get/${id}`)
        const users = response.data
        dispatch(getItemsByIdSuccess(users))
    } catch (error) {
        dispatch(getItemsByIdError(error))
    }
}
// export const getBarangById =(data)= async (dispatch)=>{
//     try {
//         dispatch(getBarangRequest())

//         const response = await API.get('/:user/${data}')
//          const users = response.data
//         dispatch(getBarangSuccess(response))
//     } catch (error) {
//          dispatch(getBarangError(error))
//     }
// }


 const getBarangRequest=(e)=>{
    return{
        type: GET_BARANG_REQUEST,
    }
}

 const getBarangSuccess=(users)=>{
    return{
        type : GET_BARANG_SUCCESS,
        payload : users
    }
}

const getBarangError=(error)=>{
    return{
        type: GET_BARANG_ERROR,
        payload : error
    }
}

const getItemsByIdRequest=()=>{
    return{
        type : GET_ITEMS_ID_REQUEST
    }
}

const getItemsByIdSuccess=(users)=>{
    return{
        type : GET_ITEMS_ID_SUCCESS,
        payload : users
    }
}

const getItemsByIdError=(error)=>{
    return{
        type : GET_ITEMS_ID_ERROR,
        payload : error
    }
}