import React, { useState } from 'react';
import { Navbar, Timer, About, Tasks, Footer, Settings } from './components';
const App: React.FC = () => {
    const defaultPomodoro: Pomodoro = {
        workTime:25,
        shortBreakTime:5,
        numberOfPomodoros:4,
        longBreakTime:30,
    }
    const colors: string[] = ["red accent-2", "light-blue darken-2", "teal lighten-2"];
    const [bgColor, setBgColor] = useState('red accent-2');
    const [showAbout, setShowAbout] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [pomodoro, setPomodoro] = useState(defaultPomodoro);
    const updateBgColor: UpdateBgColor = (newBgColor:string) => {
        setBgColor(newBgColor);
    };
    const toggleShowAbout = () => {
        setShowAbout(!showAbout);
    };
    const toggleShowSettings = () => {
        setShowSettings(!showSettings);
    };
    const addPomodoro: AddPomodoro = (pomodoroInfo:Pomodoro) => {
        console.log("Setting Pomodoro", pomodoroInfo);
        setPomodoro(pomodoroInfo);
    }


    return (
        <div className={`App ${bgColor}`}>
            <Navbar toggleShowAbout={toggleShowAbout} toggleShowSettings={toggleShowSettings} color={bgColor} />
            <div className={`container ${bgColor}`}>
                <div className="row">
                    {showAbout && <About toggleShowAbout={toggleShowAbout} />}
                    {showSettings && <Settings addPomodoro={addPomodoro} />}
                </div>
                <div className="row">
                    <Timer pomodoro={pomodoro} colors={colors} updateBgColor={updateBgColor} />
                </div>
                <div className="row">
                    <Tasks/>
                </div>
            </div>
            <Footer color={bgColor}/>
        </div>
    )
}

export default App;