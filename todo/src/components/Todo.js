import React, {useState} from 'react'
import './Todo.css'
function Todo() {
    const[value,setValue] = useState("")
    const[todos,setTodos] = useState([]);
  return (
    <div>
        <h1>Add your Todo</h1>
        <br/>
        <br/>

        <input className="inputTodo" value={value} onChange={(e)=>setValue(e.target.value)} />
        <button
        className="btn"
        onClick={()=>{
            setTodos([...todos, {id:Date.now() ,value:value}]);
            setValue("");
        }}>+</button>
        {todos.map((todo)=>(
            
            <div className="TodoDiv">
            <br/>
            
            
            <div className="text" key={todo.id}>
            <input type="checkbox" />{todo.value}</div>
            </div>
        ))}
    </div>
  )
}

export default Todo