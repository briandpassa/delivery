import React from 'react'
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types'

import './index.css'

import MinusIcons from "../../resources/icons/negative.svg"; // Path to your icons.svg
import PlusIcons from "../../resources/icons/plus.svg"; // Path to your icons.svg
import OrderedList from "../orderedList";
import ItemChoices from "../itemChoices";
import SpecialRequest from "../specialRequest";
import Header from "../header";
import PreventDoubleTapZoomButton from "../preventDoubleTapZoomButton";

const ItemView = ({ onAddOrder, onIncreaseQuantity, onReduceQuantity, onBackToMenu, scrollPosition, width, unselectedChoice, activeItem }) => (
  <Flexbox flexDirection="column" className="AllContainer">
    <Flexbox flexDirection="column" className="ItemContainer">
      <Header onHeaderClose={onBackToMenu} scrollPosition={scrollPosition} width={width} title={activeItem.name}/>
      <Flexbox flexGrow={1} width="100%" className="ImagePlaceholder" paddingTop="100%">
        <img src={activeItem.image} alt="" className="Image" width="100%"/>
        <Flexbox className="itemName" justifyContent="center">
          {activeItem.name.toUpperCase()}
        </Flexbox>
      </Flexbox>
      <Flexbox className="itemDescription smallDevicesText">
        {activeItem.desc}
      </Flexbox>
      {
        activeItem.choice? activeItem.choice.map((choice, index) => <ItemChoices choiceName={choice.choiceName} isRequired = {choice.isRequired} choicesList={choice.choicesList} choiceGroupIndex={index} key={index}/>) : null
      }
      <SpecialRequest/>
      <OrderedList onOrderItemSelected={()=>null}/>
      <Flexbox className="spacer">
      </Flexbox>
    </Flexbox>
    <Footer onBackToMenu={onBackToMenu} onAddOrder={onAddOrder} onIncreaseQuantity={onIncreaseQuantity} onReduceQuantity={onReduceQuantity} unselectedChoice={unselectedChoice} activeItem={activeItem}/>
</Flexbox>
)
/*
    {
      (scrollPosition > 100 | activeItem.choice.length===0) ? <Footer onBackToMenu={onBackToMenu} onAddOrder={onAddOrder} onIncreaseQuantity={onIncreaseQuantity} onReduceQuantity={onReduceQuantity} activeItem={activeItem}/> : null
    }
*/

ItemView.propTypes = {
  onAddOrder: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onReduceQuantity: PropTypes.func.isRequired,
  onBackToMenu: PropTypes.func.isRequired,
  scrollPosition: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  activeItem: PropTypes.shape({
    newOrderQty: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    choice:PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }).isRequired,
  unselectedChoice: PropTypes.string.isRequired,
}

const Footer = ({ onBackToMenu, onAddOrder, onIncreaseQuantity, onReduceQuantity, unselectedChoice, activeItem }) => (
  <PreventDoubleTapZoomButton>
    {
      unselectedChoice === "" ? <QuantityControl onReduceQuantity={onReduceQuantity} onIncreaseQuantity={onIncreaseQuantity} activeItem={activeItem} onAddOrder={onAddOrder} onBackToMenu={onBackToMenu}/> : <Flexbox  className="itemViewFooter" justifyContent="center" flexGrow={1}><Flexbox  className="selectChoices" flexGrow={1}  justifyContent="center">SELECT {unselectedChoice}</Flexbox></Flexbox>
    }
  </PreventDoubleTapZoomButton>

)

Footer.propTypes = {
  onBackToMenu: PropTypes.func.isRequired,
  onAddOrder: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onReduceQuantity: PropTypes.func.isRequired,
  activeItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    newOrderQty: PropTypes.number.isRequired,
  }).isRequired,
  unselectedChoice: PropTypes.string.isRequired,
}

const QuantityControl = ({ onReduceQuantity, onIncreaseQuantity, activeItem, onAddOrder, onBackToMenu }) => (
  <Flexbox className="itemViewFooter" flexDirection="column">
    <Flexbox className="itemViewOrderQuantityContainer" justifyContent="center">
      <Flexbox onClick={() => onReduceQuantity()} className="itemViewOrderReduce" alignSelf="center">
        <img src={MinusIcons} className="minus-logo" alt="minus"  width={32} height={32}/>
      </Flexbox>
      <Flexbox className="itemViewOrderQty" alignSelf="center">
        {activeItem.newOrderQty}
      </Flexbox>
      <Flexbox onClick={() => onIncreaseQuantity()} className="itemViewOrderAdd" alignSelf="center">
        <img src={PlusIcons} className="plus-logo" alt="plus" width={32} height={32}/>
      </Flexbox>
    </Flexbox>
    {
      activeItem.newOrderQty>0 ? <ToUpdateFooter onAddOrder={onAddOrder} activeItem={activeItem}/> :  <Flexbox onClick={() => onBackToMenu()} className="ViewItemBackToMenu" justifyContent="center" flexGrow = {1}>BACK TO MENU</Flexbox>
    }
  </Flexbox>
)

QuantityControl.propTypes = {
  onBackToMenu: PropTypes.func.isRequired,
  onAddOrder: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onReduceQuantity: PropTypes.func.isRequired,
  activeItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    newOrderQty: PropTypes.number.isRequired,
  }).isRequired,
}

const ToUpdateFooter = ({ onAddOrder, activeItem }) => (
  <Flexbox onClick={() => onAddOrder(activeItem)} className="ViewItemAddToCart" justifyContent="space-between" flexGrow = {1}>
    <Flexbox  className="left">
    </Flexbox>
    <Flexbox  className="mid">
      ADD {activeItem.newOrderQty} {" " + activeItem.name.toUpperCase()}
    </Flexbox>
    <Flexbox  className="right">
      ${(activeItem.newOrderQty*activeItem.price).toFixed(2)}
    </Flexbox>
  </Flexbox>
)

Footer.ToUpdateFooter = {
  onAddOrder: PropTypes.func.isRequired,
  activeItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    newOrderQty: PropTypes.number.isRequired,
  }).isRequired,
}


export default ItemView;
