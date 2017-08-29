import { combineReducers } from 'redux'
import { clock } from './clock'
import { offers } from './offers'
import { searchBar } from './search-bar'
import { offerList } from './offer-list'
import { dailyQuote } from './daily-quote'
import { filter } from './filter'

const reducer = combineReducers({
  clock,
  offers,
  searchBar,
  offerList,
  dailyQuote,
  filter
})

export default reducer
