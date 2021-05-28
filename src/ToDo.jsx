import React, { useState } from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import Button from '@material-ui/core/Button';
import "./index.css"
const deleteui={
 width:'25px',
 height:'25px',
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
 borderRadius:'50%',
 padding:'5px',
 color:'white',
 backgroundColor:'purple',
 cursor:'pointer',
 display:'inline-block'
}
function ToDo(props)
{
const[line,updatedline]=useState(false);
function putcut()
{
    updatedline(true);
    
}
return(<>
<div className="tags">
<span onClick={putcut}> <DeleteIcon className="deleteIcon" style={deleteui} /></span> 
<li style={{textDecoration:line?'line-through':'none'}} >{props.item1}</li>
</div>
</>);
}
export default ToDo;