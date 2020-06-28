import React,{useState} from 'react'

export default function TodoForm({addTodo}) {
    const [value , setValue]=useState("");


    const handleSubmit =e=>{
        e.preventDefault()
        if(value.trim()){
       addTodo(value);
        setValue("")
        }
    };

    return (
        
           <form onSubmit={handleSubmit}>
<input type="text" className="input" value={value} onChange={e=> setValue(e.target.value)}></input>
           </form>
      
    );
}
