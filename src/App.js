import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/pages/Products';
import Settings from './components/pages/Settings';
import Formulas from './components/pages/Formulas';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/prices-formula' element={<Formulas/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
       </div> 
    </Router>
  );
}

export default App;






