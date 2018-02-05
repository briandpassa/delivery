import { history } from '../store'

export const ITEM_SELECTED = 'ITEM_SELECTED'
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export const REDUCE_QUANTITY = 'REDUCE_QUANTITY'
export const RESET_QUANTITY = 'RESET_QUANTITY'
export const CHOICE_SELECTED = 'CHOICE_SELECTED'
export const CHOICE_DESELECTED = 'CHOICE_DESELECTED'
export const CHOICE_SELECTED_RADIO = 'CHOICE_SELECTED_RADIO'

const initialState = {
  activeItem: {
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ITEM_SELECTED': {
      return action.activeItem
    }

    case 'INCREASE_QUANTITY': {
      return {
        ...state,
        newOrderQty: state.newOrderQty + 1,
      }
    }

    case 'REDUCE_QUANTITY': {
      return  {
        ...state,
        newOrderQty: state.newOrderQty<1 ? 0: state.newOrderQty - 1,
      }
    }

    case 'RESET_QUANTITY': {
      return  {
        ...state,
        newOrderQty: 0,
      }
    }

    case 'REMOVE_ORDER': {
      return  {
        ...state,
        newOrderQty: 1,
        orderQty: 0,
      }
    }

    case 'CHOICE_SELECTED': {
      return {
        ...state,
        choice: [...state.choice.slice(0,action.choiceGroupIndex),
                  {
                    ...state.choice[action.choiceGroupIndex],
                    choicesList: [...state.choice[action.choiceGroupIndex].choicesList.slice(0,action.eachChoiceIndex),
                                  {
                                    ...state.choice[action.choiceGroupIndex].choicesList[action.eachChoiceIndex],
                                    selected: true,
                                  },
                                  ...state.choice[action.choiceGroupIndex].choicesList.slice(action.eachChoiceIndex+1)],
                  },
                ...state.choice.slice(action.choiceGroupIndex+1)],
      }
    }

    case 'CHOICE_DESELECTED': {
      return {
        ...state,
        choice: [...state.choice.slice(0,action.choiceGroupIndex),
                  {
                    ...state.choice[action.choiceGroupIndex],
                    choicesList: [...state.choice[action.choiceGroupIndex].choicesList.slice(0,action.eachChoiceIndex),
                                  {
                                    ...state.choice[action.choiceGroupIndex].choicesList[action.eachChoiceIndex],
                                    selected: false,
                                  },
                                  ...state.choice[action.choiceGroupIndex].choicesList.slice(action.eachChoiceIndex+1)],
                  },
                ...state.choice.slice(action.choiceGroupIndex+1)],
      }
    }

    case 'CHOICE_SELECTED_RADIO': {

      return {
        ...state,
        choice: [...state.choice.slice(0,action.choiceGroupIndex),
                  {
                    ...state.choice[action.choiceGroupIndex],
                    choicesList: [...state.choice[action.choiceGroupIndex].choicesList.slice(0,action.eachChoiceIndex).map(choice => ({...choice, selected:false})),
                                  {
                                    ...state.choice[action.choiceGroupIndex].choicesList[action.eachChoiceIndex],
                                    selected: true,
                                  },
                                  ...state.choice[action.choiceGroupIndex].choicesList.slice(action.eachChoiceIndex+1).map(choice => ({...choice, selected:false}))],
                  },
                ...state.choice.slice(action.choiceGroupIndex+1)],
      }
    }

    default:
      return state
  }
}

export const onItemClick = (uuid, itemsList, itemChoices) => {
  //Go to item view page,
  history.push('/itemView');
  const activeItem = itemsList.map(cat => cat.items).reduce((a,b) => a.concat(b)).filter(item => item.uuid === uuid)[0];
//  console.log(activeItem);
  const choice = activeItem.choice.map((id) => itemChoices.filter(choice => choice.uuid===id)[0]);

  return dispatch => {
    dispatch({
      type: ITEM_SELECTED,
      activeItem: {...activeItem, choice, newOrderQty: 1, orderIndex:-1},
    })
  }
}

export const onViewChart = () => {
  //Go to item view page,
  history.push('/viewChart');

  return dispatch => {
    dispatch({
      type: "DO NOTHING",
    })
  }
}

export const onOrderItemSelected = (ordered, orderIndex) => {
  //Go to order item edit page,
  history.push('/editItem');
  return dispatch => {
    dispatch({
      type: ITEM_SELECTED,
      activeItem: {...ordered, newOrderQty: ordered.orderQty, orderIndex},
    })
  }
}

export const onIncreaseQuantity = () => {
  return dispatch => {
    dispatch({
      type: INCREASE_QUANTITY,
    })
  }
}

export const onReduceQuantity = () => {
  return dispatch => {
    dispatch({
      type: REDUCE_QUANTITY,
    })
  }
}

export const onResetQuantity = () => {
  return dispatch => {
    dispatch({
      type: RESET_QUANTITY,
    })
  }
}

export const onChoiceSelected = (choiceGroupIndex, eachChoiceIndex) => {
  return dispatch => {
    dispatch({
      type: CHOICE_SELECTED,
      choiceGroupIndex,
      eachChoiceIndex
    })
  }
}

export const onChoiceDesecleted = (choiceGroupIndex, eachChoiceIndex) => {
  return dispatch => {
    dispatch({
      type: CHOICE_DESELECTED,
      choiceGroupIndex,
      eachChoiceIndex
    })
  }
}

export const onChoiceSelectedRadio = (e, choiceGroupIndex, eachChoiceIndex) => {
  e.preventDefault();
  return dispatch => {
    dispatch({
      type: CHOICE_SELECTED_RADIO,
      choiceGroupIndex,
      eachChoiceIndex
    })
  }
}
