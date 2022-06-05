import React, { useState } from "react";
import './index.css';

interface Props {

};

export const Tasks: React.FC<Props> = ({}) => {
    const initialTasks: Task[] = []
    const [tasks, setTasks] = useState(initialTasks);

    const toggleTasks = (selectedTask: Task) => {
        const newTasks = tasks.map( (task: Task) => {
            if(task === selectedTask) {
                return {
                    ...task,
                    completed:!task.completed,
                }
            }
            return task;
        });
        setTasks(newTasks);
    };
    const addTask: AddTask = (taskInfo: Task) => {
        setTasks([...tasks, taskInfo]);
    };
    const removeTask: RemoveTask = (selectedTask: Task) => {
        let newTasks = tasks.filter(task => {return (task !== selectedTask)});
        setTasks(newTasks);
    };
    const updateTask: UpdateTask = (selectedTask: Task, updatedTask: Task) => {
        let newTasks = tasks.filter(task => {return (task !== selectedTask)});
        newTasks.push(updatedTask);
        newTasks.sort(compareTasks);
        setTasks(newTasks);
    }

    const compareTasks = (a: Task, b: Task) => {
        return a.id > b.id ? 1 : -1;
    };

    return (
        <div className="Tasks">
            
        </div>
    )
}
