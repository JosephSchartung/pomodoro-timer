import React, { useState } from 'react';

interface Props {
    addTodo: AddTodo;
};

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [desc, setDesc] = useState('');
    const handleChange = (e:any) => {
        setDesc(e.target.value);
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        const newTodo: Todo = {
            description:desc,
            completed:false,
            id:Date.now()
        };
        addTodo(newTodo);
        setDesc('');
    }

    return (
        <form>
            <input type="text" value={desc} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add Task</button>
        </form>
    )
}