import React from "react";
import { TaskListItem } from './TaskListItem';

interface Props {
    tasks: Task[];
    toggleTask: ToggleTask;
    removeTask: RemoveTask;
    updateTask: UpdateTask;
}

export const TaskList: React.FC<Props> = ({ tasks, toggleTask, removeTask, updateTask }) => {
    return (
        <ul>
            {
                tasks.map((task) => (
                    <TaskListItem key={task.id} task={task} toggleTask={toggleTask} removeTask={removeTask} updateTask={updateTask} />
                ))
            }
        </ul>
    )
}