import React, { useState } from 'react';
import { Navbar, Timer, About } from './components';
const App: React.FC = () => {
    const [bgColor, setBgColor] = useState('red');
    const [showAbout, setShowAbout] = useState(false);
    const updateBgColor = (newBgColor:string) => {
        setBgColor(newBgColor);
    };
    const toggleShowAbout = () => {
        setShowAbout(!showAbout);
    };
    const toggleShowSettings = () => {

    };
    return (
        <div className="App">
            <Navbar toggleShowAbout={toggleShowAbout} toggleShowSettings={toggleShowSettings} color={bgColor} />
            <div className="container">
                {showAbout && <About toggleShowAbout={toggleShowAbout} />}
                <Timer />
            </div>
        </div>
    )
}

export default App;