import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TimeForm } from './components/TimeForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Dashboard } from './components/Dashboard';

function App() {
  const defaultPomodoro: Pomodoro = {
    workTime: 25,
    shortBreakTime: 5,
    numberOfPomodoros: 4,
    longBreakTime: 15
  }
  const [pomodoroInfo, setPomodoroInfo] = useState(defaultPomodoro);
  const addPomodoro: AddPomodoro = (pomodoroInfo:Pomodoro) => {
    setPomodoroInfo(pomodoroInfo);
  }


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/start" element={<TimeForm addPomodoro={addPomodoro}/>}/>
          <Route path="/dashboard" element={<Dashboard pomodoroInfo={pomodoroInfo}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;