import React from "react";
import './CreateTodoButton.css';


function CreateTodoButton(){

    const onClickButton = (msg) => {
        alert(msg);
    };

    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton("Diste click")}
        >
            +
        </button>
    );
}

export { CreateTodoButton };