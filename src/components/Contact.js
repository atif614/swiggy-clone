import React, { useEffect, useState } from "react";

const Contact = ()=>{
    const [todo,setTodo]=useState({});
    useEffect(()=>{
      getData();
      console.log("useEffect");
    },[])

    async function getData(){
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const json = await data.json();
        console.log(json[0]);
        setTodo(json)
    }
    console.log(todo[0]);
    console.log("Render");
    return  (
        <div>
            {/* {console.log(todo)} */}
            {/* {todo.map((item)=> <h3 key={item.id}>{item.title}</h3> )} */}
            <h3>{todo.title}</h3>
        </div>
    )
}

export default Contact;