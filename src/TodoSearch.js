import React from "react";
import './TodoSearch.css';

function TodoSearch(){

    //El useState devuelve un array con 2 pos [state, func setState]
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChanged = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    //React no puede renderizar varias etiquetas para un solo component, por eso usamos un array/fragment
    return[
        <input 
            className="TodoSearch" 
            placeholder="Busca una tarea"
            value={searchValue}
            onChange={onSearchValueChanged}
        />,
        <p>{searchValue}</p>
    ];
}

export { TodoSearch };