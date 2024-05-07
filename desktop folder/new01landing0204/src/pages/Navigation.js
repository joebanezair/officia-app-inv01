import React from 'react'
import jsontext from '../Global.json'
import { RiHomeSmile2Fill } from "react-icons/ri";
import '../App.css'
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const gotoStats =()=>{
    navigate('/Katheryn', { replace: true })
  }
  const gotoHome =()=>{
    navigate('/', { replace: true })
  }
  return (<>
    <div id='navigation0202'>
      <div id='navcontents'>
       <div id='myIcon' onClick={gotoHome}><RiHomeSmile2Fill /></div>
       <div id='myDetails' onClick={gotoStats}>{jsontext.GlobalTexts.Name}</div>
      </div>
    </div>
  </>)
}

export default Navigation