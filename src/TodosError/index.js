import React from "react";

function TodosError({error}){
    return (
        <p className="TodosError-text">{error}</p>
    );
}

export {TodosError};