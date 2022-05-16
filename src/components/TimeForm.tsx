import React, { useState } from "react";

interface Props {
    addPomodoro: addPomodoro;
    
}

export const TimeForm: React.FC<Props> = ({addPomodoro}) => {
    const [workTime, setWorkTime] = useState(25);
    const [shortBreakTime, setShortBreakTime] = useState(5);
    const [numberOfPomodoros, setNumbeOfPomodoros] = useState(4);
    const [longBreakTime, setLongBreakTime] = useState(30);

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
    }
    return(
        <div className="TimeForm">
            <form>
                <input type="number" value={workTime} onChange={handleChangeWorkTime} />
                <input type="number" value={shortBreakTime} onChange={handleChangeShortBreakTime} />
                <input type="number" value={numberOfPomodoros} onChange={handleChangeNumberOfPomodoros} />
                <input type="number" value={longBreakTime} onChange={handleChangeLongBreakTime} />
                <button type="submit" onClick={handleSubmit}>Set Pomodoro</button>
            </form>
        </div>
    )
}