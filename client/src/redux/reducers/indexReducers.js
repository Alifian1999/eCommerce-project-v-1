import { combineReducers } from 'redux'
import reducer from './counterReducers';
import { getBarangReducers } from './getBarangReducers';
import { userRegisterReducers } from './userRegisterReducers';
import { userLoginReducers } from './userLoginReducers';
import { hitungReducers } from './hitungReducers';
import { postItemsReducers } from './postItemsReducers';
import {getItemsByIdReducers} from './getBarangReducers'

const allReducers= combineReducers({
    reducer:reducer,
    getBarangReducers:getBarangReducers,
    userRegisterReducers:userRegisterReducers,
    userLoginReducers:userLoginReducers,
    hitungReducers:hitungReducers,
    postItemsReducers:postItemsReducers,
    getItemsByIdReducers:getItemsByIdReducers
})

export default allReducers;