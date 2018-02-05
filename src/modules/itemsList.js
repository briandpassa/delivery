

const initialState = {
  itemsList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ORDER': {
      //find the item with matching uuid, then change the quantity
      return state.map(cat => cat.items.filter(c => c.uuid===action.newOrder.uuid).length === 0 ? cat : { ...cat, items: cat.items.map(item => item.uuid!==action.newOrder.uuid?item : {...item, orderQty: item.orderQty+action.newOrder.newOrderQty})})
    }
    case 'UPDATE_ORDER': {
      return state.map(cat => cat.items.filter(c => c.uuid===action.updatedOrder.uuid).length === 0 ? cat : { ...cat, items: cat.items.map(item => item.uuid!==action.updatedOrder.uuid?item : {...item, orderQty: action.updatedOrder.newOrderQty})})
    }
    case 'REMOVE_ORDER': {
      return state.map(cat => cat.items.filter(c => c.uuid===action.removedOrder.uuid).length === 0 ? cat : { ...cat, items: cat.items.map(item => item.uuid!==action.removedOrder.uuid?item : {...item, orderQty: 0})})
    }
    default:
      return state
  }
}



