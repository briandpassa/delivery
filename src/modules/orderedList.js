import { history } from '../store'


export const ADD_ORDER = 'ADD_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'

const initialState = {
  orderedList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_ORDER': {
      const newOrderId = action.newOrder.uuid.concat(action.newOrder.choice.length>0?action.newOrder.choice.map(choice => choice.choicesList.filter(each => each.selected).map(selected => selected.name)).reduce((a,b)=>a.concat(b)):"");
      const orderedListId = state.map(order => order.uuid.concat(order.choice.length>0?order.choice.map(choice => choice.choicesList.filter(each => each.selected).map(selected => selected.name)).reduce((a,b)=>a.concat(b)):""));
      const matchIndex = (orderedListId.length>0? orderedListId.indexOf(newOrderId) : -1);

      if (matchIndex >=0 ) {
        return [...state.slice(0,matchIndex),{ ...action.newOrder, orderQty: action.newOrder.newOrderQty+state[matchIndex].orderQty, newOrderQty:0 },...state.slice(matchIndex+1)]
      }
      return [...state, { ...action.newOrder, orderQty: action.newOrder.newOrderQty, newOrderQty:0 }]
    }

    case 'UPDATE_ORDER': {
      const updateIndex = action.updatedOrder.orderIndex;
      return [...state.slice(0,updateIndex),{ ...action.updatedOrder, orderQty: action.updatedOrder.newOrderQty},...state.slice(updateIndex+1)]
    }

    case 'REMOVE_ORDER': {
      return [...state.slice(0,action.removedOrder.orderIndex),...state.slice(action.removedOrder.orderIndex+1)]
    }

    default:
      return state
  }
}


export const onAddOrder = (activeItem) => {
  history.goBack();
  return dispatch => {
    dispatch({
      type: ADD_ORDER,
      newOrder: activeItem,
    })
  }
}

export const onUpdateOrder = (activeItem) => {
  history.goBack();
  return dispatch => {
    dispatch({
      type: UPDATE_ORDER,
      updatedOrder: activeItem,
    })
  }
}

export const onRemoveOrder = (activeItem, orderedList) => {
  if (orderedList.length > 1) {
    history.goBack();
  } else {
    history.push('/');
  }
  return dispatch => {
    dispatch({
      type: REMOVE_ORDER,
      removedOrder: activeItem,
    })
  }
}
