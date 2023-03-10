import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext";


function CreateTodoButton(){

    const {setOpenModal} = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    };

    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };