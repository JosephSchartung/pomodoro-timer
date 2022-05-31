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
        <div className="AddTodoForm">
            <form>
                <input className="white-text" type="text" value={desc} onChange={handleChange}/>
                <button className="btn btn-small waves-effect waves-light hoverable transparent" onClick={handleSubmit}>Add Task</button>
            </form>
        </div>

    )
}