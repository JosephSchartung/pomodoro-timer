import React, { useState } from "react";

interface Props {
    addTask: AddTask;
};

export const AddTaskForm: React.FC<Props> =({ addTask }) => {
    const [desc, setDesc] = useState('');
    
    const handleChange = (e:any) => {
        setDesc(e.target.value);
    };
    const handleSubmit = (e:any) => {
        const newTask: Task = {
            description: desc,
            completed:false,
            id: Date.now()
        };
        addTask(newTask);
        setDesc('');
    }
    const submitHandler = (e:any)=> {
        e.preventDefault();
    }

    return (
        <div className="AddTaskForm center-align">
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    className="white" 
                    value={desc}
                    onChange={handleChange}
                />
                <button type="button" style={{ borderRadius:"20px"}}
                    className="btn-small waves-effect waves-light hoverable transparent"
                    onClick={handleSubmit}
                >
                    Add Task
                </button>
            </form>
        </div>
    )
}