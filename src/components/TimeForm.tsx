import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    addPomodoro: addPomodoro;
    
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
        navigate('/timer');
    }
    return(
        <div className="valign-wrapper" style={{width:"100%", height:"100%", position:"absolute"}}>
            <div className="valign" style={{width:"100%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 offset-m3">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title black-text">
                                        <b>Set</b> Pomodoro
                                    </span>
                                        <form>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="number" placeholder="Working Time (mins)"
                                                    onChange={handleChangeWorkTime} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="number" placeholder="Short Break Time (mins)" onChange={handleChangeShortBreakTime} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="number" placeholder="No. of Pomodoros" onChange={handleChangeNumberOfPomodoros} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="number" placeholder="Long Break Time (mins)" onChange={handleChangeLongBreakTime} />
                                                </div>
                                            </div>
                                        </form>
                                </div>
                                <div className="card-action">
                                    <button 
                                        onClick={handleSubmit}
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