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
        e.preventDefault();
        const newTask: Task = {
            description: desc,
            completed:false,
            id: Date.now()
        };
        addTask(newTask);
        setDesc('');
    }

    return (
        <div className="AddTaskForm">
            
        </div>
    )
}