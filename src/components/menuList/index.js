import React from 'react'
import Flexbox from 'flexbox-react';
import './index.css'
import PropTypes from 'prop-types'

import EachCategory from '../../components/eachCategory'
import PreventDoubleTapZoomButton from "../preventDoubleTapZoomButton";

const MenuList = ({ onViewChart, orderQty, orderTotal, itemsList }) => (
  <Flexbox flexDirection="column" className="menuListContainer">
    {
      itemsList.map((category,index) => <EachCategory categoryName={category.categoryName} items={category.items} itemsList={itemsList} key={index}/>)
    }
    {
      orderQty > 0 ? <Footer onViewChart={onViewChart} orderQty={orderQty} orderTotal={orderTotal}/> : null
    }

  </Flexbox>
)

MenuList.propTypes = {
  onViewChart: PropTypes.func.isRequired,
  itemsList: PropTypes.arrayOf(PropTypes.shape({
    categoryName: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired).isRequired,
  orderQty: PropTypes.number.isRequired,
  orderTotal: PropTypes.number.isRequired,
}


const Footer = ({ onViewChart, orderQty, orderTotal }) => (
  <PreventDoubleTapZoomButton>
    <Flexbox className="menuListFooter" flexGrow={1}>
      <Flexbox onClick={() => onViewChart()} className="menuListViewChart" justifyContent="space-between" flexGrow={1}>
        <Flexbox className="chartQty chartText" alignSelf="center">
          {orderQty}
        </Flexbox>
        <Flexbox className="chartText" alignSelf="center">
          VIEW CART
        </Flexbox>
        <Flexbox className="chartText" alignSelf="center">
          ${orderTotal}
        </Flexbox>
      </Flexbox>
    </Flexbox>
  </PreventDoubleTapZoomButton>
)

Footer.propTypes = {
  onViewChart: PropTypes.func.isRequired,
  orderQty: PropTypes.number.isRequired,
  orderTotal: PropTypes.number.isRequired,
}

export default MenuList
