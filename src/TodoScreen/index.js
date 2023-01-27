import React from "react";
import './TodoScreen.css';

function TodoScreen(props){
    return(
        <div className="TodoScreen">{props.children}</div>
    );
}

export {TodoScreen};