import React from 'react';
import './App.scss';

import Habits from './components/habits.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Daily Habit Tracker
        </p>
       
      </header>
      <Habits />
    </div>
  );
}

export default App;
