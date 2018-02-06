import React from 'react'
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types'

import './index.css'

import MinusIcons from "../../resources/icons/negative.svg"; // Path to your icons.svg
import PlusIcons from "../../resources/icons/plus.svg"; // Path to your icons.svg
import RemoveIcon from "../../resources/icons/cross.svg"; // Path to your icons.svg
import ItemChoices from "../itemChoices";
import SpecialRequest from "../specialRequest";
import Header from "../header";
import PreventDoubleTapZoomButton from "../preventDoubleTapZoomButton";


const EditItem = ({ onResetQuantity, onRemoveOrder, onUpdateOrder, onIncreaseQuantity, onReduceQuantity, onHeaderClose, scrollPosition ,width, activeItem, orderedList }) => (
  <Flexbox flexDirection="column" className="AllContainer">
    <Flexbox flexDirection="column" className="ItemContainer">
      <Header onHeaderClose={onHeaderClose} scrollPosition={scrollPosition} width={width} title={activeItem.name}/>
      <Flexbox flexGrow={1} width="100%" className="ImagePlaceholder" paddingTop="100%">
        <img src={activeItem.image} alt="" className="Image" width="100%"/>
        <Flexbox className="itemName" justifyContent="center">
          {activeItem.name.toUpperCase()}
        </Flexbox>
      </Flexbox>
      <Flexbox flexDirection="column" className="sectionContainer" justifyContent="center">
        <Flexbox className="sectionHeader" flexGrow={1}>
          YOU ARE MODIYING THE FOLLOWING SELECTION
        </Flexbox>
        <CurrentOrder ordered={activeItem}/>
      </Flexbox>
      {
        activeItem.choice? activeItem.choice.map((choice, index) => <ItemChoices choiceName={choice.choiceName} isRequired = {choice.isRequired} choicesList={choice.choicesList} choiceGroupIndex={index} key={index}/>) : null
      }
      <SpecialRequest/>
      <Flexbox className="spacer">
      </Flexbox>
    </Flexbox>
    <Footer onResetQuantity={onResetQuantity} onRemoveOrder={onRemoveOrder} onUpdateOrder={onUpdateOrder} orderedQty = {activeItem.newOrderQty} onIncreaseQuantity={onIncreaseQuantity} onReduceQuantity={onReduceQuantity} activeItem={activeItem} orderedList={orderedList}/>
  </Flexbox>
)

EditItem.propTypes = {
  onResetQuantity: PropTypes.func.isRequired,
  onRemoveOrder: PropTypes.func.isRequired,
  onUpdateOrder: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onReduceQuantity: PropTypes.func.isRequired,
  onHeaderClose: PropTypes.func.isRequired,
  scrollPosition: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  activeItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    choice: PropTypes.arrayOf(PropTypes.object).isRequired,
    newOrderQty: PropTypes.number.isRequired,
  }).isRequired,
  orderedList: PropTypes.arrayOf(PropTypes.object).isRequired,
}


const CurrentOrder = ({ ordered }) => (
  <Flexbox  className="eachOrderContainer" flexGrow={1} flexDirection="column">
    <Flexbox className="eachOrderBox" flexGrow={1} flexDirection="column">
      <Flexbox className="eachRowContainer" flexGrow={1}>
        <Flexbox width="10%" alignSelf="center" className="eachOrder">
          {ordered.newOrderQty}
        </Flexbox>
        <Flexbox width="80%" alignSelf="center" className="eachOrder">
          {ordered.name}
        </Flexbox>
        <Flexbox width="10%" justifyContent="flex-end" alignSelf="center" className="eachOrder">
          ${(ordered.newOrderQty * ordered.price).toFixed(2)}
        </Flexbox>
      </Flexbox>
      {
        // display only selected choice
        ordered.choice.length>0 ? ordered.choice.map(eachChoiceList => eachChoiceList.choicesList).reduce((a,b) => a.concat(b)).filter(cho => cho.selected).map((selectedChoice, index) => <EachChoiceOrdered orderQty={ordered.newOrderQty} selectedChoice={selectedChoice} key={index}/>) : null
      }

    </Flexbox>
  </Flexbox>
)

CurrentOrder.propTypes = {
  ordered: PropTypes.shape({
    newOrderQty: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    choice: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }).isRequired
}


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


const Footer = ({ onResetQuantity, onRemoveOrder, onUpdateOrder, orderedQty, onIncreaseQuantity, onReduceQuantity, activeItem, orderedList }) => (
  <PreventDoubleTapZoomButton>
    <Flexbox flexDirection="column" className="editItemFooter" flexGrow={1}>
      <Flexbox className="editItemOrderQuantityContainer" justifyContent="center">
        <Flexbox className="orderQuantityContainer" justifyContent="center" alignSelf="center">
          <Flexbox onClick={() => onReduceQuantity()} className="orderReduce" alignSelf="center">
            <img src={MinusIcons} className="minus-logo" alt="minus"  width={32} height={32}/>
          </Flexbox>
          <Flexbox className="orderQty" alignSelf="center">
            {orderedQty}
          </Flexbox>
          <Flexbox onClick={() => onIncreaseQuantity()} className="orderAdd" alignSelf="center">
            <img src={PlusIcons} className="plus-logo" alt="plus" width={32} height={32}/>
          </Flexbox>
        </Flexbox>
        <Flexbox onClick={() => onResetQuantity()} className="removeOrder" alignSelf="center">
          <img src={RemoveIcon} className="plus-logo" alt="plus" width={32} height={32}/>
        </Flexbox>
      </Flexbox>
      {
        orderedQty>0? <Flexbox className="EditItemUpdateCart" onClick={() => onUpdateOrder(activeItem)} justifyContent="center"><Flexbox>UPDATE ORDER</Flexbox></Flexbox> : <Flexbox  className="EditItemRemoveCart" onClick={() => onRemoveOrder(activeItem, orderedList)} justifyContent="center"><Flexbox>REMOVE ITEM</Flexbox></Flexbox>
      }
    </Flexbox>
  </PreventDoubleTapZoomButton>
)

Footer.propTypes = {
  onRemoveOrder: PropTypes.func.isRequired,
  onUpdateOrder: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onReduceQuantity: PropTypes.func.isRequired,
  orderedQty: PropTypes.number.isRequired,
  activeItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    choice: PropTypes.arrayOf(PropTypes.object).isRequired,
    newOrderQty: PropTypes.number.isRequired,
  }).isRequired,
  orderedList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

/*
*/

/*
const mapStateToProps = state => ({
//  items: state.category.items,
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EachCategory)
*/

export default EditItem;
