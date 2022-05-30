import React, { useState } from "react";
import { UpdateTodoListItem } from "./UpdateTodoListItem";

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
    removeTodo: RemoveTodo;
    updateTodo: UpdateTodo;
};

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo, updateTodo })=> {
    const [showInput, setShowInput] = useState(false);

    return(
        <li>
            <label
                style={{ textDecoration: todo.completed ? 'line-through': undefined}}
                className="white-text"
            >
                <input type="checkbox"
                checked={todo.completed}
                onChange={() => {
                    toggleTodo(todo);
                }}
                />
                <h6>{todo.description}</h6>
            </label>
            <button onClick={() => {
                setShowInput(!showInput)
                
            }}
                className="btn-floating btn-small waves-effect waves-light green"
            >
                <i className="material-icons">edit</i>
            </button>
            <button onClick={()=> {
                removeTodo(todo);
            }}
                className="btn-floating btn-small waves-effect waves-light accent-4 red"
            >
                <i className="material-icons">delete</i>
            </button>
            {showInput && <UpdateTodoListItem todo={todo} updateTodo={updateTodo} />}
        </li>
    )
    
}