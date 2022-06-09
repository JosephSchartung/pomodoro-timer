import React, { useEffect, useState } from "react";
import { MdPause, MdPlayArrow } from 'react-icons/md';
import './index.css';

interface Props {
    pomodoro: Pomodoro,
    colors: string[],
    updateBgColor: UpdateBgColor
};

export const Timer:React.FC<Props> = ({ pomodoro, colors, updateBgColor }) => {
    const convertTimeToArray = (time:number) => {
        return [time, 0];
    }
    const mapPhasesToTime = (phases: string[], times:number[]) => {
        const timePhases: { [key:string ] : number[]} = {};
        phases.forEach((phase, idx) => {
            timePhases[phase] = convertTimeToArray(times[idx]);
        })
        return timePhases;
    }
    const mapPhasesToColor = (phases:string[], colors: string[]) => {
        const colorPhases: { [key: string] : string} = {};
        phases.forEach((phase, idx) => {
            colorPhases[phase] = colors[idx];
        })
        return colorPhases
    }

    const phases: string[] = ["Work Time", "Short Break Time", "Long Break Time"];

    const { workTime, shortBreakTime, numberOfPomodoros, longBreakTime } = pomodoro;

    const [pomodorosRemaining, setPomodorosRemaining] = useState(numberOfPomodoros);
    const initialPomodoros = pomodorosRemaining;
    const [timeRemaining, setTimeRemaining] = useState(convertTimeToArray(workTime));
    const [curPhase, setCurPhase] = useState(phases[0]);
    const [timerTicking, setTimerTicking] = useState(false);

    const timePhases = mapPhasesToTime(phases, [workTime, shortBreakTime, longBreakTime]);
    const colorPhases = mapPhasesToColor(phases, colors);

    const tick = () => {
        if( timeRemaining[0] === 0 && timeRemaining[1] === 0 ){
            reset();
        } else if( timeRemaining[1] === 0 ){ 
            setTimeRemaining( [timeRemaining[0] - 1, 59] );
        } else{
            setTimeRemaining([timeRemaining[0], timeRemaining[1]-1]);
        }
    }

    const toggleTimer = () => {
        setTimerTicking(!timerTicking);
    }
    const reset = () => {
        switch ( curPhase ) {
            case phases[0]:
                const nextPhase = pomodorosRemaining === 0 ? phases[2] : phases[1];
                setCurPhase(nextPhase);
                setTimeRemaining(timePhases[nextPhase]);
                updateBgColor(colorPhases[nextPhase])
                break;
            case phases[1]:
                setCurPhase(phases[0]);
                setTimeRemaining(timePhases[phases[0]]);
                setPomodorosRemaining(pomodorosRemaining-1);
                updateBgColor(colorPhases[phases[0]]);
                break;
            case phases[2]:
                setCurPhase(phases[0]);
                setTimeRemaining(timePhases[phases[0]]);
                setPomodorosRemaining(initialPomodoros);
                updateBgColor(colorPhases[phases[0]]);
                toggleTimer();
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if( timerTicking ) {
            const timerID = setInterval(() => tick(), 1000);
            return () => clearInterval(timerID);
        }
    });

    return(
        <div className="Timer">
            <div className="container white-text">
                <div className="row">
                    <div className="card center-align transparent">
                        <div className="card-content">
                            <span className="card-title center-align">
                                <b>Pomodoros</b> Remaining: {pomodorosRemaining}
                            </span>
                            <div className="row">
                                <span>
                                    {curPhase}
                                </span>
                            </div>
                            <div className="card-panel transparent">
                                <span>
                                    <h4>
                                        {
                                            `${timeRemaining[0].toString().padStart(2,'0')}:
                                            ${timeRemaining[1].toString().padStart(2, '0')}`
                                        }
                                    </h4>
                                </span>
                            </div>
                            <div className="card-action">
                                <button 
                                style={{
                                    borderRadius:"20px"
                                }}
                                className="btn-large waves-effect waves-light hoverable transparent"
                                onClick={toggleTimer}
                                >
                                    {timerTicking ? <MdPause /> : <MdPlayArrow />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 