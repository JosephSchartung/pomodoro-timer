import React, { useState } from "react";

interface Props {
    todo: Todo;
    updateTodo: UpdateTodo
}

export const UpdateTodoListItem: React.FC<Props> = ({ todo, updateTodo}) => {
    const [upTodo, setUpTodo] = useState(todo);
    const [text, setText] = useState('');

    const handleChange = (e:any) => {
        setText(e.target.value);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const updatedTodo = {
            description:text,
            completed:upTodo.completed,
            id:upTodo.id
        };
        updateTodo(upTodo, updatedTodo);
        setText('');
        setUpTodo(updatedTodo);
    }
    return (
        <form>
            <input className="white-text" type="text" value={text} onChange={handleChange}/>
            <button className="btn btn-small waves-effect waves-light hoverable accent-2 red" type="button" onClick={handleSubmit}>Update</button>
        </form>
    )
}