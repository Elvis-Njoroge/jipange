import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className='app-container'> 
        <Sidebar/>
        <div className='App'>
          <div className='component-container'>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

