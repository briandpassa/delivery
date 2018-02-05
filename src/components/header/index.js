import React from 'react'
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types'

import './index.css'
import ShareIconBlack from "../../resources/icons/share - black.svg"; // Path to your icons.svg
import CloseIconsBlack from "../../resources/icons/close - black.svg"; // Path to your icons.svg
import ShareIconWhite from "../../resources/icons/share - white.svg"; // Path to your icons.svg
import CloseIconWhite from "../../resources/icons/close - white.svg"; // Path to your icons.svg

const Header = ({ onHeaderClose, scrollPosition, width, title }) => (
  <Flexbox>
    {
      scrollPosition > width ? <HeaderBlack onHeaderClose={onHeaderClose} title={title} /> : <HeaderWhite  onHeaderClose={onHeaderClose} ratio = {scrollPosition/width}/>
    }
  </Flexbox>
)

Header.propTypes = {
  onHeaderClose: PropTypes.func.isRequired,
  scrollPosition: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

const HeaderBlack = ({ onHeaderClose, title }) => (
  <Flexbox className="Header" justifyContent="space-between">
    <Flexbox onClick={() => onHeaderClose()} className="CloseButton" alignSelf="center">
      <img src={CloseIconsBlack} className="close-logo" alt="close"  width={16} height={16}/>
    </Flexbox>
    <Flexbox className="itemNameHeaderText" alignSelf="center">
      {title}
    </Flexbox>
    <Flexbox className="ShareButton" alignSelf="center">
      <img src={ShareIconBlack} className="share-logo" alt="share"  width={20} height={20}/>
    </Flexbox>

  </Flexbox>
)

HeaderBlack.propTypes = {
  onHeaderClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

const HeaderWhite = ({ onHeaderClose, ratio }) => (
  <Flexbox className="HeaderWhite" justifyContent="space-between" style={{backgroundImage: `linear-gradient(rgba(0,0,0,${0.8*Math.max(0,1-4*ratio)}),rgba(0,0,0,0))`}}>
    <Flexbox onClick={() => onHeaderClose()}  className="CloseButton" alignSelf="center">
      <img src={CloseIconWhite} className="close-logo" alt="close"  width={16} height={16}/>
    </Flexbox>
    <Flexbox className="ShareButton" alignSelf="center">
      <img src={ShareIconWhite} className="share-logo" alt="share"  width={20} height={20}/>
    </Flexbox>
  </Flexbox>
)

HeaderWhite.propTypes = {
  onHeaderClose: PropTypes.func.isRequired,
  ratio: PropTypes.number.isRequired,
}

export default Header;
