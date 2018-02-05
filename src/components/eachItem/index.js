import React from 'react'
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onItemClick } from '../../modules/activeItem'

import './index.css'


const EachItem = ({ itemsList, itemChoices, onItemClick, uuid, orderQty, image, name, price }) => (
  <Flexbox onClick={() => onItemClick(uuid, itemsList, itemChoices)} width= "calc(100% * (1/3) - 2px)" className="ItemContainer" alignItems="flex-end" flexDirection="column">
    {
      orderQty > 0 ? <Flexbox className="ImagePlaceholder"><Flexbox className="NoOfOrder">{orderQty}</Flexbox></Flexbox> : null
    }
    <Flexbox flexGrow={1} width="100%" className="ImagePlaceholder" paddingTop="100%">
      <img src={image} alt="" className="Image" width="100%"/>
    </Flexbox>
    <Flexbox width= "calc(100% - 10px)" className="itemText smallDevicesText" justifyContent="space-between" alignItems="flex-end">
      <Flexbox  className="itemTextName">
        {name}
      </Flexbox>
      <Flexbox  className="itemTextPrice">
        {price}
      </Flexbox>
    </Flexbox>
  </Flexbox>
)

EachItem.propTypes = {
  itemsList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  itemChoices: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired,
  uuid: PropTypes.string.isRequired,
  orderQty: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  itemsList: state.itemsList,
  itemChoices: state.itemChoices,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onItemClick,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EachItem)

