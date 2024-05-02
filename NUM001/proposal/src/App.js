import React from 'react'
import './App.css'
import jsontext from './Global.json'
import { FaReddit, FaYoutubeSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

const App = () => {
 
  const variables = [
    {label: jsontext.Poker.red01},
    {label: jsontext.Poker.twi02},
    {label: jsontext.Poker.you03},
    {label: jsontext.Poker.ins04},
    {label: jsontext.Poker.fac05},
  ]

  return (<>
   <div id='imageback'>
     <div id='imagecolor'>
      {variables.map((item, index)=>(
        <div id='designer' key={index}>
          <div style={{marginRight: 5}}>{
            index === 0 && <FaReddit style={{color: 'white', fontSize: 40}} /> ||
            index === 1 && <FaSquareXTwitter style={{color: 'white', fontSize: 40}} /> ||
            index === 2 && <RiInstagramFill style={{color: 'white', fontSize: 40}} /> ||
            index === 3 && <FaYoutubeSquare style={{color: 'white', fontSize: 40}} /> ||
            index === 4 && <FaFacebookSquare style={{color: 'white', fontSize: 40}} /> 
          }</div>
          <div style={{color:'white', marginTop:-7, fontSize: 20, fontWeight: 'bold'}}>{item.label}</div>
        </div>
      ))}
     </div>
     
     <div id='imagecontainer01' />
     <div style={{color: 'white', fontWeight: 'bold' }} id='hellobot' >
        {jsontext.Poker.nh01 + ' ' + jsontext.Poker.nh02}
     </div>

   </div>
  </>)
}

export default App