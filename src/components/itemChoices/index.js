import React from 'react'
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types'

import './index.css'
import EachChoice from  "../eachChoice";


const ItemChoices = ({ choiceName, isRequired, choicesList, choiceGroupIndex }) => (
  <Flexbox flexDirection="column" className="choiceContainer">
    <Flexbox className="choiceHeader" flexGrow={1} justifyContent="space-between">
      <Flexbox className="headerText">
        {choiceName}
      </Flexbox>
      {
        isRequired & choicesList.map(choice => choice.selected * 1).reduce((a,b) => a+b) < 1 ? <Flexbox className="requiredText" alignSelf="center">required</Flexbox> : null
      }
    </Flexbox>
    <form className="choiceListContainer" >
      {
        choicesList.map((cho,index) => <EachChoice choiceName={cho.name} choicePrice={cho.price} key={index} selected={cho.selected} choiceGroupIndex={choiceGroupIndex} eachChoiceIndex={index}/>)
      }
    </form>
  </Flexbox>
)

ItemChoices.propTypes = {
  choiceName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  choiceGroupIndex: PropTypes.number.isRequired,
  choicesList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
}

export default ItemChoices
