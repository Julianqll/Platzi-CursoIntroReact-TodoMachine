//import './App.css';
import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoScreen } from "./TodoScreen";
import { TodoTitle } from "./TodoTitle";

const todos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar curso de React", completed: false},
  {text: "Llorar", completed: false},
  {text: "Programar", completed: false},
  {text: "Entrenar", completed: false},
]


function App(props) {
  return (
    <React.Fragment>

      <TodoScreen>

      <TodoTitle/>

      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>

      </TodoScreen>
      
    </React.Fragment>
  );
}

export default App;
