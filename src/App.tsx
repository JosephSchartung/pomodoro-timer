import React, { useState } from 'react';
import { Navbar, Timer, About, Tasks } from './components';
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
        <div style={{
            height:"100vh"
        }}className={`App ${bgColor}`}>
            <Navbar toggleShowAbout={toggleShowAbout} toggleShowSettings={toggleShowSettings} color={bgColor} />
            <div className="container">
                {showAbout && <About toggleShowAbout={toggleShowAbout} />}
                <Timer pomodoro={defaultPomodoro} updateBgColor={updateBgColor} />
                <Tasks/>
            </div>
        </div>
    )
}

export default App;