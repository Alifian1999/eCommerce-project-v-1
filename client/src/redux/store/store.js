import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import allReducers from '../reducers/indexReducers'

const middleware= [thunk]

const store= createStore(allReducers,composeWithDevTools(applyMiddleware(...middleware)))

export default store;