import React from 'react'
import ViewCart from '../../components/viewCart'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onItemClick, onViewChart, onOrderItemSelected } from '../../modules/activeItem'
import { goBack } from 'react-router-redux'
import { withWindow, withScroll } from 'react-window-decorators';
import { orderTotalSelectorTotal, GetRecomendedItemSelector } from '../../selectors'


class ViewCartContainer extends React.Component {

  componentDidMount(){
    window.scrollTo(0,0);
  }


  render() {
    const { onOrderItemSelected, onViewChart, onHeaderClose, onItemClick, orderedList, deliveryTime, deliveryAddress, orderTotal, recomendedItem } = this.props;

    return (
      <ViewCart onOrderItemSelected={onOrderItemSelected} onViewChart={onViewChart} onHeaderClose={onHeaderClose} onItemClick={onItemClick} orderedList={orderedList} orderTotal={orderTotal} recomendedItem={recomendedItem} address={deliveryAddress.address} deliveryTime={deliveryTime} latLang={deliveryAddress.latLang}/>
    );
  }
}

const mapStateToProps = state => ({
  orderedList: state.orderedList,
  deliveryTime: state.deliveryTime,
  deliveryAddress: state.deliveryAddress,
  orderTotal: orderTotalSelectorTotal(state),
  recomendedItem: GetRecomendedItemSelector(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onItemClick,
  onViewChart,
  onOrderItemSelected,
  onHeaderClose: () => goBack(),
}, dispatch)

export default withWindow(withScroll(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewCartContainer)))

