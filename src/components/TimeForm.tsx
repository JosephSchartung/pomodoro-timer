import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    addPomodoro: AddPomodoro;
    
}
export const TimeForm: React.FC<Props> = ({addPomodoro }) => {
    const [workTime, setWorkTime] = useState(25);
    const [shortBreakTime, setShortBreakTime] = useState(5);
    const [numberOfPomodoros, setNumbeOfPomodoros] = useState(4);
    const [longBreakTime, setLongBreakTime] = useState(30);

    const navigate = useNavigate();

    const handleChangeWorkTime = (e:any) => {
        setWorkTime(e.target.value);
    };
    const handleChangeShortBreakTime = (e:any) => {
        setShortBreakTime(e.target.value);   
    }
    const handleChangeNumberOfPomodoros = (e:any) => {
        setNumbeOfPomodoros(e.target.value);
    };
    const handleChangeLongBreakTime = (e:any) => {
        setLongBreakTime(e.target.value)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        
        const newPomodoro: Pomodoro = {
            workTime: workTime,
            shortBreakTime: shortBreakTime,
            numberOfPomodoros: numberOfPomodoros,
            longBreakTime: longBreakTime,
        }
        addPomodoro(newPomodoro);
        navigate('/dashboard');
    }
    return(
        <div className="valign-wrapper" style={{width:"100%", height:"100%", position:"absolute"}}>
            <div className="valign" style={{width:"100%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 offset-m3">
                            <div className="card red" style={{borderRadius:"20px"}}>
                                <div className="card-content">
                                    <span className="card-title white-text">
                                        <b>Set</b> Pomodoro
                                    </span>
                                        <form>
                                            <div className="row">
                                                <label className="white-text">Working Time (mins)</label>
                                                <div className="input-field col s12">
                                                    <input type="number"
                                                    value={workTime}
                                                    onChange={handleChangeWorkTime} 
                                                    className="white-text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="white-text">Short Break Time (mins)</label>
                                                <div className="input-field col s12">
                                                    <input type="number"
                                                    id="shortBreakTime"
                                                    value={shortBreakTime}
                                                    onChange={handleChangeShortBreakTime}
                                                    className="white-text" 
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="white-text">No. of Pomodoros</label>
                                                <div className="input-field col s12">
                                                    <input type="number" 
                                                    id="pomodoroNumber"
                                                    value={numberOfPomodoros}
                                                    onChange={handleChangeNumberOfPomodoros} 
                                                    className="white-text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="white-text">Long Break Time (mins)</label>
                                                <div className="input-field col s12">
                                                    <input type="number" 
                                                    id="longBreak"
                                                    value={longBreakTime}
                                                    onChange={handleChangeLongBreakTime}
                                                    className="white-text" 
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                </div>
                                <div className="card-action" style={{borderRadius:"20px"}}>
                                    <button 
                                        onClick={handleSubmit}
                                        className="btn btn-small waves-effect waves-light hoverable accent-2 red"
                                    >
                                        Start Pomodoro
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}