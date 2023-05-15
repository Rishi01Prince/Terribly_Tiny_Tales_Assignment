import './App.css';
import React from 'react';
import Home from './Components/Home';
import Display from './Components/Display';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  return (
    <div className="App">
    

     <Router>
      <Routes>
        <Route path="/Terribly_Tiny_Tales_Assignment" element={<Home/>} />
        <Route path="/display" element={<Display/>} />
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;
