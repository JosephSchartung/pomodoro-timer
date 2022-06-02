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
        <div className="container"style={{width:"33em"}}>
            <div className="row">
                <div style={{borderRadius:"20px"}}className="card center-align red">
                    <div className="card-content">
                        <span className="card-title center-align white-text">
                            <b>Set</b> Pomodoro
                        </span>
                        <form>
                            <div style={{borderRadius:"20px", margin:"auto", width:"50%", display:"flex", justifyContent:"center", padding:"10px"}} className="card-panel red accent-2">
                                <label htmlFor="" className="white-text"><h6>Working Time (mins)</h6></label>
                                <div className="input-field s6">
                                    <input type="number" 
                                        value={workTime}
                                        onChange={handleChangeWorkTime}
                                        className='white-text'
                                    />
                                </div>
                            </div>
                            <div style={{borderRadius:"20px", margin:"auto", width:"50%", display:"flex", justifyContent:"center", padding:"10px"}} className="card-panel red accent-2">
                                <label htmlFor="" className="white-text"><h6>Short Break Time (mins)</h6></label>
                                <div className="input-field s6">
                                    <input type="number" 
                                        value={shortBreakTime}
                                        onChange={handleChangeShortBreakTime}
                                        className="white-text"
                                    />
                                </div>
                            </div>
                            <div style={{borderRadius:"20px", margin:"auto", width:"50%", display:"flex", justifyContent:"center", padding:"10px"}} className="card-panel red accent-2">
                                <label htmlFor="" className="white-text"><h6>Number of Pomodoros</h6></label>
                                    <div className="input-field">
                                        <input type="number"
                                            value={numberOfPomodoros}
                                            onChange={handleChangeNumberOfPomodoros}
                                            className="white-text"
                                        />
                                    </div>
                            </div>
                            <div style={{borderRadius:"20px", margin:"auto", width:"50%", display:"flex", justifyContent:"center", padding:"10px"}} className="card-panel red accent-2">
                                <label htmlFor="" className="white-text"><h6>Long Break Time (mins)</h6></label>
                                <div className="input-field">
                                    <input type="number"
                                        value={longBreakTime}
                                        onChange={handleChangeLongBreakTime}
                                        className='white-text'
                                    />
                                </div>
                            </div>
                            <div className="card-action center-align">
                                <button style={{borderRadius:"20px"}}onClick={handleSubmit} className="btn btn-small waves-effect waves-light hoverable accent-2 red">
                                    Start Pomodoro
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}