import React, { useState } from 'react';
import VisitorForm from './components/VisitorForm';
import VisitorList from './components/VisitorList';
import './App.css';

const App = () => {
  const [visitors, setVisitors] = useState([]);

  const addVisitor = (visitor) => {
    setVisitors([visitor, ...visitors]); // Add the new visitor to the state
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Visitor Tracker</h1>
      </header>
      <main>
        <VisitorForm addVisitor={addVisitor} />
        <VisitorList visitors={visitors} setVisitors={setVisitors} />
      </main>
    </div>
  );
};

export default App;
