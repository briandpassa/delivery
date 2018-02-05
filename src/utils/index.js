export const subTotalChoice = choiceList => {
  const selectedChoice = choiceList.filter(choice => choice.selected);
  return selectedChoice.length>0 ? selectedChoice.map(choice => choice.price).reduce((a,b) => a+b) : 0
}
export const subTotalPerRow = orderedRow => {
  if (orderedRow.choice.length === 0) {
    return orderedRow.price*orderedRow.orderQty;
  }
  return (orderedRow.price+ orderedRow.choice.map(choice => subTotalChoice(choice.choicesList)).reduce((a,b) => a+b))*orderedRow.orderQty;
}


export const countOrderTotal = (orderedList, GST, isTaxInclusive, svcChargeRate) => {

  const subTotal = Math.round(orderedList.map(orderedRow => subTotalPerRow(orderedRow)).reduce((a,b)=>a+b)*100)/100;
  const svcCharge = Math.round(subTotal*svcChargeRate*100)/100;
  const tax = isTaxInclusive ? Math.round((subTotal+svcCharge)*GST/(1+GST)*100)/100 : Math.round((subTotal+svcCharge)*GST*100)/100
  const total = isTaxInclusive ? Math.round((subTotal + svcCharge)*100)/100 : Math.round((subTotal + svcCharge + tax)*100)/100;

  return {
    subTotal,
    svcCharge,
    tax,
    total,
  }
}

