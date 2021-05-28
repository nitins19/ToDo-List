import React, { useState } from 'react';
import ToDo from "./ToDo.jsx"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const button_style={
    backgroundColor:'rgb(59, 163, 85)',
  width:'50px',
  height:'55px',
  border:'none',
  color:'white',
  borderRadius:'50%'
}
function App()
{  
    const[item,updateditem]=useState("");
    const[totalitems,totalupdateditems]=useState([]);
    function inputEvent(event)
    {
      updateditem(event.target.value);
    }
    function listofItems()
    {
     totalupdateditems((allitems)=>{
         return[...allitems,item];
         
     });
     updateditem('');
    }
   
    return(<>
    <div className="card">
    <div className="heading">
    <h1> Todo List</h1>
    </div>
    <div className="two">
    <input type="text" placeholder="Add an item" onChange={inputEvent} value={item} />
    <Button className="uibut" style={button_style} onClick={listofItems} ><AddIcon style={{fontSize:'21px'}}/></Button>
    </div>
     <ul id="scroll">
    
    {totalitems.map((val,index)=>{
        
        return(<>
             <ToDo
             item1={val}
             id={index}
             />
            <br/>
            </>
        );
    })}
     </ul>
    
    </div>

    </>);
}
export default App;
