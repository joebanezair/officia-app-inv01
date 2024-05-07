import React from 'react'
import jsontext from '../Global.json'

const Plan = () => {

  const copyToClipboard = () => {
    const textToCopy = jsontext.MetamaskAccount.Account;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('You can now proceed for payment');
      })
  };

  const mapthis = [
    {id: 1, label: jsontext.Plan.TwentyDollar, label2: jsontext.Plan.planeoneChat, onclick: copyToClipboard},
    {id: 2, label: jsontext.Plan.FifthyDollar, label2: jsontext.Plan.planetwoChat, onclick: copyToClipboard},
    {id: 3, label: jsontext.Plan.Any, label2: jsontext.Plan.Please, onclick: copyToClipboard},
  ]
  return (<>
    <div id='plancontainer'>
      <div id='hello-sir'>{jsontext.Plan.Title}</div>
      <div id='plancontents'>
        {mapthis.map((item, index) => (
          <div key={index} id={`planny`}>
            {/* <div key={index} id={`planny${index + 1}`}> */}
            <div id='buttonPlan01'>{item.label2}</div>
            <button id='buttonPlan' onClick={item.onclick}>{item.label}</button>
          </div>
        ))}
      </div>
    </div>
  </>)
}

export default Plan