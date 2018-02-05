import React from 'react'
import './index.css'

import preventDoubleTapZoom from '../../utils/preventDoubleTapZoom'

const PreventDoubleTapZoomButton = ({ children }) =>
  <div onTouchStart={preventDoubleTapZoom} className="preventDoubleTapZoomButton">
    {children}
  </div>

export default PreventDoubleTapZoomButton
