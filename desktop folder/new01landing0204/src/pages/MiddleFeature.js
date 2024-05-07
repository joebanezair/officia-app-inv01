import React from 'react'
import jsontext from '../Global.json'

const MiddleFeature = () => {

  const loopmiddle = [
    {id: 1, label: jsontext.Consider.yessugar}, 
    {id: 2, label: jsontext.Consider.considerMe}
  ]
  return (<>
    <div id='middlefeaturecontainer'>
      <div id='middleProfile'/>
      <div id='midheader01'>{jsontext.Consider.why01}</div>
      <div id='helloflexmid'>
        {loopmiddle.map((itm, indx)=>(
            <div key={indx} id='yesuare'>
            {itm.label}
            </div>
        ))}
      </div>
    </div>
  </>)
}

export default MiddleFeature