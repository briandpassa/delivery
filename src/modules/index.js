import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import itemsList from './itemsList'
import orderedList from './orderedList'
import recomendedItem from './recomendedItem'
import deliveryTime from './deliveryTime'
import deliveryAddress from './deliveryAddress'
import itemChoices from './itemChoices'
import activeItem from './activeItem'


export default combineReducers({
  routing: routerReducer,
  itemsList,
  orderedList,
  recomendedItem,
  deliveryTime,
  deliveryAddress,
  itemChoices,
  activeItem,
})

