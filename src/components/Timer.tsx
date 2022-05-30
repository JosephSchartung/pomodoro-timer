import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    pomodoro: Pomodoro;
}
export const Timer: React.FC<Props> = ({pomodoro}) => {
    const convertTimeToArray = (time:number) => {
        return [time, 0];
    }
    const phases = ["Work Time", "Short Break Time", "Long Break Time"];
    const navigate = useNavigate();

    const { workTime, shortBreakTime, numberOfPomodoros, longBreakTime } = pomodoro;
    const [pomodorosRemaining, setPomodorosRemaining] = useState(numberOfPomodoros);
    const [timeRemaining, setTimeRemaining] = useState(convertTimeToArray(workTime));
    const [currentPhase, setCurrentPhase] = useState(phases[0]);
    const [timerTicking, setTimerTicking] = useState(false); 

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

    const toggleTimer = () => {
        setTimerTicking(!timerTicking);
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
                navigate('/start');
                break;
            default:
                break;
        }
    }

    useEffect( () => {
        if(timerTicking){
            const timerID = setInterval(() => tick(), 1000);
            return () => clearInterval(timerID);
        }
    });

    return (
        <div className="container valign-wrapper center-align">
            <div className="row">
                <div className="col s12">
                    <div className="card red">
                        <div className="card-content">
                            <span className="card-title white-text">
                                <b>Pomodoros</b> Remaining: {pomodorosRemaining}
                            </span>
                                <div className="row">
                                    <span className="white-text">
                                        Current Phase: {currentPhase}
                                    </span>
                                </div>
                                <div className="row" style={{textAlign:"center"}}>
                                    <span className="white-text">
                                        <h4>
                                            {
                                                `${timeRemaining[0].toString().padStart(2,'0')}: 
                                                ${timeRemaining[1].toString().padStart(2,'0')}`
                                            }
                                        </h4>
                                    </span>
                                </div>
                        </div>
                        <div className="card-action">
                            <button className="btn btn-small waves-effect waves-light hoverable accent-2 red" onClick={toggleTimer}>{timerTicking ? <i className="material-icons">pause</i> : <i className="material-icons">play_arrow</i>}</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}