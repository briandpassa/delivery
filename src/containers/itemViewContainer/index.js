import React from 'react'
import ItemView from '../../components/itemView'
import { withWindow, withScroll } from 'react-window-decorators';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { onIncreaseQuantity, onReduceQuantity } from '../../modules/activeItem'
import { onAddOrder } from '../../modules/orderedList'
import { unselectedChoiceSelector } from '../../selectors'



class ItemViewContainer extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    const { onAddOrder, onIncreaseQuantity, onReduceQuantity, onBackToMenu, scrollPosition, dimensions, activeItem, unselectedChoice } = this.props;

    return (
      <ItemView onAddOrder={onAddOrder} onIncreaseQuantity={onIncreaseQuantity} onReduceQuantity={onReduceQuantity} onBackToMenu={onBackToMenu} scrollPosition={scrollPosition} width={dimensions.width} unselectedChoice={unselectedChoice} activeItem={activeItem}/>
    );
  }
}


const mapStateToProps = state => ({
  activeItem: state.activeItem,
  unselectedChoice: unselectedChoiceSelector(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onBackToMenu: () => goBack(),
  onIncreaseQuantity,
  onReduceQuantity,
  onAddOrder,
}, dispatch)

export default withWindow(withScroll(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemViewContainer)))
