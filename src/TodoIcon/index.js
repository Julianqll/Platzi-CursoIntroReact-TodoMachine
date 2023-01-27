import React from "react";
import './TodoIcon.css';
//Puedes importar tus diseños de inconos com SVG
//import {ReactComponent as NombredeIcono} from './icono.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash} from '@fortawesome/free-solid-svg-icons';

const iconTypes = {
    "check" : color => (
        <FontAwesomeIcon className="Icon-svg Icon-svg--check" icon={faCheck} color={color} />
    ),
    "delete" : color => (
        <FontAwesomeIcon className="Icon-svg Icon-svg--delete" icon={faTrash} color={color} />
    ),
};

function TodoIcon({type, color, onClick}){
    return(
        <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );

}

export {TodoIcon};