import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import './App.css';
import Home from './Components/Home';
import Assets from './Components/Assets';
import Budget from './Components/Budget';
import Expenses from './Components/Expenses';
import Goals from './Components/Goals'; 

function App() {
  return (
    <Router>
      <div className='app-container'> 
        <Sidebar/>
        <div className='App'>
          <div className='component-container'>
            <Routes>
              <Route path="/assets" element={<Assets />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

