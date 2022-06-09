import React, { useState } from 'react';
import { Navbar, Timer, About, Tasks, Footer } from './components';
const App: React.FC = () => {
    const [bgColor, setBgColor] = useState('red accent-2');
    const [showAbout, setShowAbout] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const updateBgColor: UpdateBgColor = (newBgColor:string) => {
        setBgColor(newBgColor);
    };
    const toggleShowAbout = () => {
        setShowAbout(!showAbout);
    };
    const toggleShowSettings = () => {
        setShowSettings(!showSettings);
    };
    const defaultPomodoro: Pomodoro = {
        workTime:1,
        shortBreakTime:2,
        numberOfPomodoros:1,
        longBreakTime:3,
    }
    return (
        <div className={`App ${bgColor}`}>
            <Navbar toggleShowAbout={toggleShowAbout} toggleShowSettings={toggleShowSettings} color={bgColor} />
            <div className={`container ${bgColor}`}>
                <div className="row">
                    {showAbout && <About toggleShowAbout={toggleShowAbout} />}
                </div>
                <div className="row">
                    <Timer pomodoro={defaultPomodoro} updateBgColor={updateBgColor} />
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