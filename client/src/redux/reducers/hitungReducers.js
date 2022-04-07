import { tambah,kurang } from "../types/type"


export const hitungReducers=(state=0,action)=>{
    switch(action.type){
        case tambah:
            return state+1
        
        case kurang:
            return state-1
        
        default :
            return state
    }

}