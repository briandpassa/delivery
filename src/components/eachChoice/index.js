import React from 'react'
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { onChoiceSelectedRadio } from '../../modules/activeItem'
import RadioButtonSelected from "../../resources/icons/radioButtonSelected.svg"; // Path to your icons.svg
import RadioButtonUnselected from "../../resources/icons/radioButtonUnselected.svg"; // Path to your icons.svg

import './index.css'



class EachChoice extends React.Component {

  render() {
    const { choiceName, choicePrice, onChoiceSelectedRadio, selected, choiceGroupIndex, eachChoiceIndex } = this.props;

    return (
      <div>
        {
          selected ? <SelectedChoice choiceName={choiceName} selected={selected} choicePrice={choicePrice} choiceGroupIndex={choiceGroupIndex} eachChoiceIndex={eachChoiceIndex}/> : <DeselectedChoice choiceName={choiceName} choicePrice={choicePrice} selected={selected} onChoiceSelectedRadio={onChoiceSelectedRadio} choiceGroupIndex={choiceGroupIndex} eachChoiceIndex={eachChoiceIndex} />
        }
      </div>
    );
  }
}

EachChoice.propTypes = {
  choiceName : PropTypes.string.isRequired,
  choicePrice : PropTypes.number.isRequired,
  onChoiceSelectedRadio: PropTypes.func.isRequired,
//  onChoiceDesecleted: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  choiceGroupIndex: PropTypes.number.isRequired,
  eachChoiceIndex: PropTypes.number.isRequired,
}

const DeselectedChoice = ({ choiceName, choicePrice, selected, onChoiceSelectedRadio, choiceGroupIndex, eachChoiceIndex}) => (
  <Flexbox className="EachChoiceContainer" flexGrow={1} onClick={(e)=>onChoiceSelectedRadio(e, choiceGroupIndex, eachChoiceIndex)}>
    <Flexbox alignSelf="center">
      <img src={RadioButtonUnselected} alt="radioButtonUnselected"  width={16} height={16}/>
    </Flexbox>
    <label className="EachChoiceTextContainer">
      <Flexbox flexDirection="row" justifyContent="space-between">
        <Flexbox className="EachChoiceText">
          {choiceName}
        </Flexbox>
        {
          choicePrice > 0 ? <Flexbox className="EachChoiceText"> ${choicePrice} </Flexbox> : null
        }
      </Flexbox>
    </label>
  </Flexbox>
)

DeselectedChoice.propTypes = {
  choiceName : PropTypes.string.isRequired,
  choicePrice : PropTypes.number.isRequired,
  onChoiceSelectedRadio: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  choiceGroupIndex: PropTypes.number.isRequired,
  eachChoiceIndex: PropTypes.number.isRequired,
}

const SelectedChoice = ({ choiceName, choicePrice, selected, choiceGroupIndex, eachChoiceIndex}) => (
  <Flexbox className="EachChoiceContainer" flexGrow={1}>
    <Flexbox alignSelf="center">
      <img src={RadioButtonSelected} alt="radioButtonSelected"  width={16} height={16}/>
    </Flexbox>
    <label className="EachChoiceTextContainer">
      <Flexbox flexDirection="row" justifyContent="space-between">
        <Flexbox className="EachChoiceTextSelected">
          {choiceName}
        </Flexbox>
        {
          choicePrice > 0 ? <Flexbox className="EachChoiceTextSelected"> ${choicePrice} </Flexbox> : null
        }
      </Flexbox>
    </label>
  </Flexbox>
)

SelectedChoice.propTypes = {
  choiceName : PropTypes.string.isRequired,
  choicePrice : PropTypes.number.isRequired,
//  onChoiceDesecleted: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  choiceGroupIndex: PropTypes.number.isRequired,
  eachChoiceIndex: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
//  onChoiceSelected,
//  onChoiceDesecleted,
  onChoiceSelectedRadio,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EachChoice)



