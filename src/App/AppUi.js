import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoScreen } from "../TodoScreen";
import { TodoTitle } from "../TodoTitle";

function AppUI(
    {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo
    }
){
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
            {error && <p>Lo sentimos, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

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

export {AppUI};