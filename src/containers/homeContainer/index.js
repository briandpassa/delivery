import React from 'react'
//import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onViewChart } from '../../modules/activeItem'
import { orderQtySelector, orderTotalSelectorTotal } from '../../selectors'

import MenuList from '../../components/menuList'


const Home = ({ onViewChart, itemsList, orderedList, orderQty, orderTotal }) => <MenuList onViewChart={onViewChart} itemsList={itemsList} orderQty={orderQty} orderTotal={orderTotal}/>


const mapStateToProps = state => ({
  itemsList: state.itemsList,
  orderedList: state.orderedList,
  orderQty: orderQtySelector(state),
  orderTotal: orderTotalSelectorTotal(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onViewChart,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
