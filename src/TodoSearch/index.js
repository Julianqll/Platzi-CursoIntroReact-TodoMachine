import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

function TodoSearch(){

    const { searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChanged = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    //React no puede renderizar varias etiquetas para un solo component, por eso usamos un array/fragment
    return(
        <input 
            className="TodoSearch" 
            placeholder="Busca una tarea"
            value={searchValue}
            onChange={onSearchValueChanged}
        />
    );
}

export { TodoSearch };