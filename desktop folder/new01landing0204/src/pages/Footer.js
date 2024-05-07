import React from 'react'
import jsontext from '../Global.json'

const Footer = () => {
  const copyToClipboard = () => {
    const textToCopy = jsontext.Consider.email69;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('You can now email me 😊');
      })
  };

  const data = [
    {id: 1, label: jsontext.GlobalTexts.After},
    {id: 2, label: jsontext.Consider.email69, onclick: copyToClipboard}
  ]

  return (<>
    <div>
      {data.map((item, indexter)=>(
        <div id={`footha${indexter+1}`} key={indexter} onClick={item.onclick}>{item.label}</div>
      ))}
    </div>
  </>)
}

export default Footer