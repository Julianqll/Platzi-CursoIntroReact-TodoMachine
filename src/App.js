//import './App.css';
import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoScreen } from "./TodoScreen";
import { TodoTitle } from "./TodoTitle";

const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar curso de React", completed: true},
  {text: "Llorar", completed: false},
  {text: "Programar", completed: false},
  {text: "Entrenar", completed: false},
]


function App() {

  //El useState devuelve un array con 2 pos [state, func setState]
  const [searchValue, setSearchValue] = React.useState('');

  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  }
  else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    setTodos(newTodos);
    
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    
  };

  return (
    <React.Fragment>

      <TodoScreen>

      <TodoTitle/>

      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>

      </TodoScreen>
      
    </React.Fragment>
  );
}

export default App;
