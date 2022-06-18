import React, { useState } from "react";
import './index.css';

interface Props {
    addPomodoro: AddPomodoro;
};

export const Settings:React.FC<Props> = ({ addPomodoro }) => {
    const [workTime, setWorkTime] = useState(25);
    const [shortBreakTime, setShortBreakTime] = useState(5);
    const [numberOfPomodoros, setNumberOfPomodoros] = useState(4);
    const [longBreakTime, setLongBreakTime] = useState(15);

    const handleChangeWorkTime = (e:any) => {
        setWorkTime(e.target.value);
    }
    const handleChangeShortBreakTime = (e:any) => {
        setShortBreakTime(e.target.value);
    }
    const handleChangeNumberOfPomodoros = (e:any) => {
        setNumberOfPomodoros(e.target.value);
    }
    const handleChangeLongBreakTime = (e:any) => {
        setLongBreakTime(e.target.value);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const newPomodoro: Pomodoro = {
            workTime,
            shortBreakTime,
            numberOfPomodoros,
            longBreakTime
        };
        addPomodoro(newPomodoro);
    }

    return(
        <div className="Settings">
            <div className="container">
                <div className="row">
                    <div className="card transparent">
                        <div className="card-content">
                            <span className="card-title center-align white-text">
                                <b>Change</b> Pomodoro Settings
                            </span>
                            <form>
                                <div className="row">
                                    <div className="card-panel col">
                                        <label className="black-text">
                                            Working Time (minutes)
                                        </label>
                                        <div className="input-field">
                                            <input type="number"
                                                value={workTime}
                                                onChange={handleChangeWorkTime}
                                                className="black-text"
                                            />
                                        </div>
                                    </div>
                                    <div className="card-panel col">
                                        <label className="black-text">
                                            Short Break Time (minutes)
                                        </label>
                                        <div className="input-field">
                                            <input type="number"
                                                value={shortBreakTime}
                                                onChange={handleChangeShortBreakTime}
                                                className="black-text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="card-panel col">
                                        <label className="black-text">
                                            Number Of Pomodoros
                                        </label>
                                        <div className="input-field">
                                            <input type="number"
                                                value={numberOfPomodoros}
                                                onChange={handleChangeNumberOfPomodoros}
                                                className="black-text"
                                            />
                                        </div>
                                    </div>
                                    <div className="card-panel col">
                                        <label className="black-text">
                                            Long Break Time (minutes)
                                        </label>
                                        <div className="input-field black-text">
                                            <input type="number"
                                                value={longBreakTime}
                                                onChange={handleChangeLongBreakTime}
                                                className="black-text"
                                            />
                                        </div>
                                    </div>                
                                </div>
                                <div className="card-action">
                                    <button onClick={handleSubmit} className="btn-small waves-effect waves-light hoverable">
                                        Set Pomodoro
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}