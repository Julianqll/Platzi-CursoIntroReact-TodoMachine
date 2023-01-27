import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoScreen } from "../TodoScreen";
import { TodoTitle } from "../TodoTitle";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
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
                {error && <TodosError error={error}/>}
                {loading && <TodosLoading/>}
                {(!loading && !searchedTodos.length) && <EmptyTodos/>}

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
                    <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton/>

        </TodoScreen>
        
        </React.Fragment>
    );
}

export {AppUI};