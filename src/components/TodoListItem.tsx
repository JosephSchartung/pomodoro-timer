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
            >
                <input type="checkbox"
                checked={todo.completed}
                onChange={() => {
                    toggleTodo(todo);
                }}
                />{' '}
                {todo.description}
            </label>
            <button onClick={() => {
                setShowInput(!showInput)
            }}>
                <i className="material-icons">edit</i>
            </button>
            <button onClick={()=> {
                removeTodo(todo);
            }}>
                <i className="material-icons">delete</i>
            </button>
            {showInput && <UpdateTodoListItem todo={todo} updateTodo={updateTodo} />}
        </li>
    )
    
}