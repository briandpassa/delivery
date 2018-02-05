import { createSelector } from 'reselect'
import { countOrderTotal } from "../utils"


// -- Selector on orderedList
const orderedListSelector = state => state.orderedList;

export const orderQtySelector = createSelector(
  [ orderedListSelector ],
  ( orderedList ) => ( orderedList.length > 0 ? orderedList.map(item => item.orderQty).reduce((a,b) => a+b) : 0)
)

export const orderTotalSelector = createSelector(
  [ orderedListSelector ],
  ( orderedList ) => (orderedList.length > 0? countOrderTotal(orderedList, 0.07, true, 0.0) : {subTotal: 0, svcCharge: 0, tax:0, total:0})
)

export const orderTotalSelectorTotal = createSelector(
  [ orderTotalSelector ],
  ( orderTotal ) => orderTotal.total
)

/*export const selectedChoiceSelector = createSelector(
  [ orderedListSelector ],
  ( orderedList ) => orderTotal.total
)
*/
//ordered.choice.length>0 ? ordered.choice.map(eachChoiceList => eachChoiceList.choicesList).reduce((a,b) => a.concat(b)).filter(cho => cho.selected).map((selectedChoice, index) => <EachChoiceOrdered orderQty={ordered.orderQty} selectedChoice={selectedChoice} key={index}/>)

//--- Selector on ActiveItems
const activeItemSelector = state => state.activeItem


export const unselectedChoiceSelector = createSelector(
  [ activeItemSelector ],
  ( activeItem ) => {
    let unselectedChoice = activeItem.choice.length>0 ? activeItem.choice.map(choice=>choice.choiceName)[activeItem.choice.map(choice => choice.choicesList.filter(each => each.selected)).map(cho => cho.length).indexOf(0)] : "";
    if(unselectedChoice === undefined) unselectedChoice = "";
    return unselectedChoice;
  }
)

//--- Selector on itemList
const itemsListSelector = state => state.itemsList

//--- Selector on Recommended Item
const recomendedItemSelector = state => state.recomendedItem


export const GetRecomendedItemSelector = createSelector(
  [ itemsListSelector, recomendedItemSelector ],
  ( itemsList, recomendedItem ) => ([itemsList[recomendedItem[0][0]].items[recomendedItem[0][1]], itemsList[recomendedItem[1][0]].items[recomendedItem[1][1]], itemsList[recomendedItem[2][0]].items[recomendedItem[2][1]]])
)

