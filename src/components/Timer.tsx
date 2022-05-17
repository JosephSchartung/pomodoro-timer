import React, { useEffect, useState } from "react";

interface Props {
    pomodoro: Pomodoro;
}
export const Timer: React.FC<Props> = ({pomodoro}) => {
    const convertTimeToArray = (time:number) => {
        return [time, 0];
    }
    const phases = ["Work Time", "Short Break Time", "Long Break Time"];

    const { workTime, shortBreakTime, numberOfPomodoros, longBreakTime } = pomodoro;
    const [pomodorosRemaining, setPomodorosRemaining] = useState(numberOfPomodoros);
    const [timeRemaining, setTimeRemaining] = useState(convertTimeToArray(workTime));
    const [currentPhase, setCurrentPhase] = useState(phases[0]);

    const tick = () => {
        if (timeRemaining[0] === 0 && timeRemaining[1] === 0){
            reset();
            newTime();
        } else if(timeRemaining[1] === 0) {
            setTimeRemaining([timeRemaining[0]-1, 59]);
        } else {
            setTimeRemaining([timeRemaining[0], timeRemaining[1]-1]);
        }
    }
    const newTime = () => {
        switch (currentPhase) {
            case phases[0]:
                setTimeRemaining(convertTimeToArray(workTime));
                break;
            case phases[1]:
                setTimeRemaining(convertTimeToArray(shortBreakTime));
                break;
            case phases[2]:
                setTimeRemaining(convertTimeToArray(longBreakTime));
                break;
            default:
                break;
        }
    }
    const reset = () => {
        switch (currentPhase) {
            case phases[0]:
                setCurrentPhase(pomodorosRemaining === 0 ? phases[2] : phases[1]);
                break;
            case phases[1]:
                setCurrentPhase(phases[0]);
                setPomodorosRemaining(pomodorosRemaining-1);
                break;
            case phases[2]:
                
                break;
            default:
                break;
        }
    }

    useEffect( () => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <div className="Timer" style={{textAlign:"center"}}>
            <p>Pomodoros Remaining: {pomodorosRemaining}</p>
            <p>Current Phase: {currentPhase}</p>
            <p>
                {
                    `${timeRemaining[0].toString().padStart(2,'0')}: 
                    ${timeRemaining[1].toString().padStart(2,'0')}`
                }
            </p>
        </div>
    )
}