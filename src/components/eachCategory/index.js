import React from 'react'
import Flexbox from 'flexbox-react';
import './index.css'
import PropTypes from 'prop-types'

import EachItem from "../eachItem";


const EachCategory = ({ categoryName, items }) => (
  <Flexbox flexDirection="column">
    <Flexbox flexDirection="column" className="AllContainer">
      <Flexbox element="header" className="CategoryContainer" justifyContent="center">
        {categoryName}
      </Flexbox>

      <Flexbox flexGrow={1} flexWrap="wrap">
        {
          items.map((item, index) => (<EachItem uuid={item.uuid} name={item.name}  price={item.price} image={item.image} orderQty={item.orderQty} key={index }/>))
        }
      </Flexbox>
    </Flexbox>
  </Flexbox>
)

EachCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    orderQty: PropTypes.number.isRequired,
  }).isRequired).isRequired,
}

export default EachCategory
