import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './components/Login'
import Header from './components/Header'
import './App.css';

function App() {
   return (
      <div className="App">
         <Router>
            <Header />
            <Login />
         </Router>
      </div>
   );
}

export default App;
