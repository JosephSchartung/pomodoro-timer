import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { UpdateTaskListItem } from "./UpdateTaskItem";

interface Props {
    task: Task;
    toggleTask: ToggleTask;
    removeTask: RemoveTask;
    updateTask: UpdateTask;
};

export const TaskListItem: React.FC<Props> = ({ task, toggleTask, updateTask, removeTask }) => {
    const [showInput, setShowInput] = useState(false);

    return (
        <li>
            <div className="container">
                <div className="row">
                    <label 
                        className="white-text"
                        style={{ textDecoration: task.completed ? 'line-through' : undefined }}
                    >
                        <input type="checkbox" 
                            checked={task.completed}
                            onChange={() => {
                                toggleTask(task);
                            }}
                        />
                        <h6 className="col">{task.description}</h6>
                    </label>
                    <button onClick={() => {
                        setShowInput(!showInput);
                    }}
                        className="col btn-floating btn-small hoverable waves-effect waves-light green"
                    >
                        <MdEdit />
                    </button>
                    <button onClick={() => {
                        removeTask(task);
                    }}
                        className="col btn-floating btn-small hoverable waves-effect waves-light red"
                    >
                        <MdDelete />
                    </button>
                    {showInput && <UpdateTaskListItem task={task} updateTask={updateTask} />}
                </div>
            </div>
        </li>
    )
};