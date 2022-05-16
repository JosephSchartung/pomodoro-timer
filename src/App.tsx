import React from 'react';
import { Navbar } from './components/Navbar';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Timer initialTime={[25, 0]}/>
    </div>
  );
}

export default App;