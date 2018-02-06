import React from 'react'
import EditItem from '../../components/editItem'
import { withWindow, withScroll } from 'react-window-decorators';
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { onIncreaseQuantity, onReduceQuantity, onResetQuantity } from '../../modules/activeItem'
import { onUpdateOrder, onRemoveOrder } from '../../modules/orderedList'

class EditItemContainer extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    const { onResetQuantity, onRemoveOrder, onUpdateOrder, onIncreaseQuantity, onReduceQuantity, onHeaderClose, scrollPosition, dimensions, activeItem } = this.props;
    return (
      <EditItem onResetQuantity={onResetQuantity} onRemoveOrder={onRemoveOrder} onUpdateOrder={onUpdateOrder} onIncreaseQuantity={onIncreaseQuantity} onReduceQuantity={onReduceQuantity} onHeaderClose={onHeaderClose} scrollPosition={scrollPosition} width={dimensions.width} activeItem = {activeItem}/>
    );
  }
}

const mapStateToProps = state => ({
  activeItem: state.activeItem,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onHeaderClose: () => goBack(),
  onIncreaseQuantity,
  onReduceQuantity,
  onUpdateOrder,
  onRemoveOrder,
  onResetQuantity,
}, dispatch)


export default withWindow(withScroll(connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditItemContainer)))
