import { CiHome } from "react-icons/ci";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './design.css'
const PublicHandlers = () => {
  return (<>
    <div id='navbar'>
       <TextField
         id="outlined-helperText"
         label="get roles"
         defaultValue="Default Value"
         helperText="search tasks"
         size="small"
        />
    </div>
    <div id='body'>PublicHandlers</div>
  </>)
}

export default PublicHandlers