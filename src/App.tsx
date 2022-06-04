import React from 'react';
import { Navbar } from './components';
const App: React.FC = () => {
    const toggleShowAbout = () => {

    };
    const toggleShowSettings = () => {

    };
    return (
        <div className="App">
            <Navbar toggleShowAbout={toggleShowAbout} toggleShowSettings={toggleShowSettings} />
            
        </div>
    )
}

export default App;