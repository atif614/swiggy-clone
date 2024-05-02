import React, { useState } from "react";

const Contact = ()=>{
    
    return  (
        <div className="m-4">
          {/* <Counter/>  
          <Counter/>  
          <Counter/>  
          <Counter/>   */}
          <HOCRed cmp={Counter} />
        </div>
    )
}

export default Contact;

function HOCRed(props){
    return <h1 className="bg-green-500">{props.cmp}</h1>;
}
 
function Counter(){
    const[count,setCount]=useState(0);
    return(
        <div className="bg-red-400">
        <div>{count}</div>
        <button className="ml-3 bg-green-100" onClick={()=>setCount(count+1)}>update</button>
        </div>
    )
}