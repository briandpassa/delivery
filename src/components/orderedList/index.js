import React from 'react'
import Flexbox from 'flexbox-react';
import './index.css'
import PropTypes from 'prop-types'
//import { onOrderItemSelected } from '../../modules/activeItem'
import { orderTotalSelector } from '../../selectors'

import EachOrdered from "../eachOrdered";

import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'

class OrderedList extends React.Component {

  render() {
    const { onOrderItemSelected, orderedList, orderTotal } = this.props;
    return (
      orderTotal.total > 0 ? <OrderedListView onOrderItemSelected={onOrderItemSelected} orderedList={orderedList} orderTotal={orderTotal}/> : null
    );
  }
}

OrderedList.propTypes = {
  onOrderItemSelected: PropTypes.func.isRequired,
  orderedList:  PropTypes.arrayOf(PropTypes.object).isRequired,
  orderTotal: PropTypes.shape({
    subTotal: PropTypes.number.isRequired,
    svcCharge: PropTypes.number.isRequired,
    tax :PropTypes.number.isRequired,
    total :PropTypes.number.isRequired,
  }).isRequired,
}


const OrderedListView = ({ onOrderItemSelected, orderedList, orderTotal }) => (
  <Flexbox flexDirection="column" className="sectionContainer" justifyContent="center">
    <Flexbox className="sectionHeader" flexGrow={1}>
      YOUR ORDER
    </Flexbox>
    {
      orderedList.map((ordered, index) => <EachOrdered onOrderItemSelected={onOrderItemSelected} ordered={ordered} orderIndex={index} key={index}/>)
    }
    <Flexbox flexDirection="column" className="orderTotalContainer">
      <Flexbox>
        <Flexbox width="90%" alignSelf="center" className="totalText">SUBTOTAL</Flexbox>
        <Flexbox width="10%" justifyContent="flex-end" alignSelf="center"  className="totalText">${orderTotal.subTotal.toFixed(2)}</Flexbox>
      </Flexbox>
      {
        orderTotal.svcCharge > 0 ? <Flexbox> <Flexbox width="90%" alignSelf="center" className="totalText">SERVICE CHARGE</Flexbox> <Flexbox width="10%" justifyContent="flex-end" alignSelf="center"  className="totalText">${orderTotal.svcCharge.toFixed(2)}</Flexbox> </Flexbox> : null
      }
      {
        orderTotal.tax>0 ? <Flexbox><Flexbox width="90%" alignSelf="center" className="totalText">TAX</Flexbox><Flexbox width="10%" justifyContent="flex-end" alignSelf="center"  className="totalText">${orderTotal.tax.toFixed(2)}</Flexbox></Flexbox> : null
      }
      <Flexbox className="grandTotalText">
        <Flexbox width="90%" alignSelf="center">TOTAL</Flexbox>
        <Flexbox width="10%" justifyContent="flex-end" alignSelf="center" >${orderTotal.total.toFixed(2)}</Flexbox>
      </Flexbox>
    </Flexbox>
  </Flexbox>
)

OrderedListView.propTypes = {
  onOrderItemSelected: PropTypes.func.isRequired,
  orderedList:  PropTypes.arrayOf(PropTypes.object).isRequired,
  orderTotal: PropTypes.shape({
    subTotal: PropTypes.number.isRequired,
    svcCharge: PropTypes.number.isRequired,
    tax :PropTypes.number.isRequired,
    total :PropTypes.number.isRequired,
  }).isRequired,
}


const mapStateToProps = state => ({
  orderedList: state.orderedList,
  orderTotal: orderTotalSelector(state),
})

//const mapDispatchToProps = dispatch => bindActionCreators({
//  onOrderItemSelected,
//}, dispatch)

export default connect(
  mapStateToProps,
//  mapDispatchToProps,
)(OrderedList)
