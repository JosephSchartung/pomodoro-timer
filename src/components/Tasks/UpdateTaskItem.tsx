import React, { useState } from "react";

interface Props {
    task: Task;
    updateTask: UpdateTask;
};

export const UpdateTaskListItem: React.FC<Props> = ({ task, updateTask }) => {
    const [curTask, setCurTask] = useState(task);
    const [text, setText] = useState('');

    const handleChange = (e:any) => {
        setText(e.target.value);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const updatedTask = {
            description: text,
            completed:curTask.completed,
            id: curTask.id,
        };
        updateTask(curTask, updatedTask);
        setText('');
        setCurTask(updatedTask);
    }
    return (
        <div className="UpdateTaskItem">
            <form>
                <input type="text"
                    className="white-text"
                    value={text}
                    onChange={handleChange}    
                />
                <button 
                    type="button"
                    className="btn-small waves-effect waves-light hoverable transparent"
                    onClick={handleSubmit}
                >
                    Update Task
                </button>
            </form>
        </div>
    )
}