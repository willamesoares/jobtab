import { combineReducers } from 'redux'
import { clock } from './clock'
import { offers } from './offers'

const reducer = combineReducers({
  clock,
  offers
})

export default reducer
