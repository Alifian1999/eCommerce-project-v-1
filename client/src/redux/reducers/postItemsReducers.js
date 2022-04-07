import { POST_ITEMS_SUCCESS } from "../types/type";
import { POST_ITEMS_ERROR } from "../types/type";
import { POST_ITEMS_REQUEST } from "../types/type";

export const postItemsReducers=(state='',action)=>{

    switch(action.type){
        case POST_ITEMS_REQUEST :
            return{
                loading:true,
                state:state
            }
        case POST_ITEMS_SUCCESS:
            return{
                loading:false,
                users : action.payload
            }
        case POST_ITEMS_ERROR:
            return{
                loading:false,
                error:action.payload
            }

        default : return state
    }
}