import React from "react";
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';



function TodoItem(props) {
    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="Icon Icon-delete">
          <i class="fa fa-trash"></i>
        </span>
      </li>
    );
  }
  
  export { TodoItem };