import React, {useState} from 'react';
import TodoForm from "./TodoForm"
import Todo from "./Todo"
import './App.css';

export default  function App() {
const [todos, setTodos]=useState([
  {text : "learning hooks",
isCompleted : false},
  {text : "learning hooks",
  isCompleted : false},
  {text : "learning hooks",
  isCompleted : false}

]);
const addTodo = text =>{
  const newTodos = [...todos, {text}];
  setTodos(newTodos)
}

const completeTodo = index=>{
  const newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;

  setTodos(newTodos)

};

const deleteTodo= index=>{
  const newTodos=[...todos];
  newTodos.splice(index,1)
  setTodos(newTodos)
}
  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index)=>(
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>

      </div>
    </div>
  );
}


