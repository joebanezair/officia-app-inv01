import React from 'react';
import jsontext from '../Global.json';
import { MdOutlineContentCopy } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';

const Body = () => {
  const copyToClipboard = () => {
    const textToCopy = jsontext.MetamaskAccount.Account;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('You can now proceed for payment');
      })
  };

  return (
    <>
      <div id='helloProfile'>
        <div id='profile'/>
        <div id='textHeader01'>{jsontext.GlobalTexts.ClickTheLink}</div>
        <div id='accountcolor'>
          <div id='iconmeta'></div>
          <Tooltip title="Copy Code">
           <div id='iconmetaview' onClick={copyToClipboard}>COPY: {jsontext.MetamaskAccount.FieldView}</div>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Body;