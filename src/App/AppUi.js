import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoScreen } from "../TodoScreen";
import { TodoTitle } from "../TodoTitle";
import {Modal} from "../Modal";

function AppUI(){

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>

        <TodoScreen>

            <TodoTitle/>

            <TodoCounter/>

            <TodoSearch/>
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

            {!!openModal && (
                <Modal>
                <p>¿Estás seguro de eliminar este TODO?</p>
                </Modal>
            )}

            <CreateTodoButton/>

        </TodoScreen>
        
        </React.Fragment>
    );
}

export {AppUI};