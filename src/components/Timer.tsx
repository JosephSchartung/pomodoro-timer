import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    pomodoro: Pomodoro;
}
export const Timer: React.FC<Props> = ({pomodoro}) => {
    const convertTimeToArray = (time:number) => {
        return [time, 0];
    }
    const convertPhasesToObject = (phases:string[], times:number[]) => {
        const timePhases: { [key:string] : number} = {};
        phases.forEach((phase, idx) => {
            timePhases[phase] = times[idx];
        })
        return timePhases;
    }
    const phases:string[] = ["Work Time", "Short Break Time", "Long Break Time"];
    
    const navigate = useNavigate();

    const { workTime, shortBreakTime, numberOfPomodoros, longBreakTime } = pomodoro;
    const [pomodorosRemaining, setPomodorosRemaining] = useState(numberOfPomodoros);
    const [timeRemaining, setTimeRemaining] = useState(convertTimeToArray(workTime));
    const [currentPhase, setCurrentPhase] = useState(phases[0]);
    const [timerTicking, setTimerTicking] = useState(false); 

    const timePhases = convertPhasesToObject(phases, [workTime, shortBreakTime, longBreakTime]);

    const tick = () => {
        if (timeRemaining[0] === 0 && timeRemaining[1] === 0){
            reset();
        } else if(timeRemaining[1] === 0) {
            setTimeRemaining([timeRemaining[0]-1, 59]);
        } else {
            setTimeRemaining([timeRemaining[0], timeRemaining[1]-1]);
        }
    }

    const toggleTimer = () => {
        setTimerTicking(!timerTicking);
    }
    const reset = () => {
        switch (currentPhase) {
            case phases[0]:
                const nextPhase = pomodorosRemaining === 0 ? phases[2] : phases[1];
                setCurrentPhase(nextPhase);
                setTimeRemaining(convertTimeToArray(timePhases[nextPhase]));
                break;
            case phases[1]:
                setCurrentPhase(phases[0]);
                setTimeRemaining(convertTimeToArray(timePhases[phases[0]]));
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
        <div style={{width:"33em"}} className="container">
            <div className="row">
                <div style={{borderRadius:"20px"}}className="card center-align red">
                    <div className="card-content">
                        <span className="card-title center-align white-text">
                            <b>Pomodoros</b> Remaining: {pomodorosRemaining}
                        </span>
                        <div className="row">
                            <span className="white-text">
                                {currentPhase}
                            </span>
                        </div>
                        <div style={{borderRadius:"20px", margin:"auto", width:"50%", display:"flex", justifyContent:"center", padding:"10px"}}className="card-panel red accent-2">
                            <span className="white-text">
                                <h4>
                                {
                                    `${timeRemaining[0].toString().padStart(2,'0')}:
                                    ${timeRemaining[1].toString().padStart(2,'0')}`
                                }
                                </h4>
                            </span>
                        </div>
                        <div className="card-action">
                            <button style={{ borderRadius:"20px"}} className="btn-small waves-effect waves-light hoverable accent-2 transparent" onClick={toggleTimer}>
                                {timerTicking ? <i className="material-icons">pause</i>: <i className="material-icons">play_arrow</i>}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
