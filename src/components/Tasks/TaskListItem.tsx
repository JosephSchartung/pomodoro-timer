import React, { useState } from "react";
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

        </li>
    )
};