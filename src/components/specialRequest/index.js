import React from 'react'
import Flexbox from 'flexbox-react';
import './index.css'

const SpecialRequest = () => (
  <Flexbox flexDirection="column" className="sectionContainer">
    <Flexbox className="sectionHeader" flexGrow={1}>
      SPECIAL REQUESTS
    </Flexbox>
    <Flexbox className="requestInputContainer" flexGrow={1}>
      <input type="text" name="requests"  className="requestInputField" placeholder="Add note (extra sauce, no tahu, no tempe etc.)"/>
    </Flexbox>
  </Flexbox>
)

export default SpecialRequest;
