import { combineReducers } from 'redux'

import value from './count/productSlice'

const reducers = combineReducers({ 
  value,
})

export default reducers;
