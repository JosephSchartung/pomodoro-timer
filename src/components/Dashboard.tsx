import React from "react";
import { Timer } from "./Timer";
import { Todos } from "./Todos";

interface Props {
    pomodoroInfo: Pomodoro;
};

export const Dashboard: React.FC<Props> = ({ pomodoroInfo }) => {
    return (
        <div className="dashboard">
            <Timer pomodoro={pomodoroInfo} />
            <Todos />
        </div>
    )
}