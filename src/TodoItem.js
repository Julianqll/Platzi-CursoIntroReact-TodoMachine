import React from "react";
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash} from '@fortawesome/free-solid-svg-icons';



function TodoItem(props) {

    //const onComplete = () => {
    //  alert("Ya completaste el todo " + props.text);
    //};

    //const onDelete = () => {
    //  alert("Borraste el todo " + props.text);
    //};


    return (
      <li className="TodoItem">
        <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
        >
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span 
          className="Icon Icon-delete"
          onClick={props.onDelete}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </li>
    );
  }
  
  export { TodoItem };