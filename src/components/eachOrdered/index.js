import React from 'react'
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types'

import './index.css'



const EachOrdered = ({ onOrderItemSelected, ordered, orderIndex }) => (
  <Flexbox onClick={onOrderItemSelected? () => onOrderItemSelected( ordered, orderIndex ) : null} className="eachOrderContainer" flexGrow={1} flexDirection="column">
    <Flexbox className="eachOrderBox" flexGrow={1} flexDirection="column">
      <Flexbox className="eachRowContainer" flexGrow={1}>
        <Flexbox width="10%" alignSelf="center" className="eachOrder">
          {ordered.orderQty}
        </Flexbox>
        <Flexbox width="80%" alignSelf="center" className="eachOrder">
          {ordered.name}
        </Flexbox>
        <Flexbox width="10%" justifyContent="flex-end" alignSelf="center" className="eachOrder">
          ${(ordered.orderQty * ordered.price).toFixed(2)}
        </Flexbox>
      </Flexbox>
      {
        // display only selected choice
        ordered.choice.length>0 ? ordered.choice.map(eachChoiceList => eachChoiceList.choicesList).reduce((a,b) => a.concat(b)).filter(cho => cho.selected).map((selectedChoice, index) => <EachChoiceOrdered orderQty={ordered.orderQty} selectedChoice={selectedChoice} key={index}/>) : null
      }

    </Flexbox>
  </Flexbox>
)

EachOrdered.propTypes = {
  orderIndex: PropTypes.number.isRequired,
  onOrderItemSelected: PropTypes.func,
  ordered: PropTypes.shape({
    orderQty: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    choice: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }).isRequired
}

//

const EachChoiceOrdered = ({ orderQty, selectedChoice }) => (
  <Flexbox className="eachRowContainer" flexGrow={1}>
    <Flexbox width="10%" alignSelf="center">
    </Flexbox>
    <Flexbox width="80%" alignSelf="center" className="eachOrder eachChoices">
      + {selectedChoice.name}
    </Flexbox>
    {
      selectedChoice.price >0 ? <Flexbox width="10%" justifyContent="flex-end" alignSelf="center" className="eachOrder eachChoices"> ${(selectedChoice.price * orderQty).toFixed(2)} </Flexbox> : null
    }
  </Flexbox>
)

EachChoiceOrdered.propTypes = {
  orderQty: PropTypes.number.isRequired,
  selectedChoice: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired
}


export default EachOrdered;
