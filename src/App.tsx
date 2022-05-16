import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TimeForm } from './components/TimeForm';
import { Timer } from './components/Timer';

function App() {
  const defaultPomodoro: Pomodoro ={
    workTime: 25,
    shortBreakTime: 5,
    numberOfPomodoros: 4,
    longBreakTime: 30
  }
  const [pomodoroInfo, setPomodoroInfo] = useState(defaultPomodoro);
  const [showForm, setShowForm] = useState(true);

  const addPomodoro: addPomodoro = (pomodoroInfo:Pomodoro) => {
    setPomodoroInfo(pomodoroInfo);
    setShowForm(false);
  }


  return (
    <div className="App">
      <Navbar />
      {
        showForm ? <TimeForm addPomodoro={addPomodoro}/> : <Timer pomodoro={pomodoroInfo}/>
      }
    </div>
  );
}

export default App;