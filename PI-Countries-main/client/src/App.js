import './App.css';
import React from 'react'; 
import NavBar from './Components/NavBar';
//import { Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className='App'>
        <NavBar />
        <Home/>  
      </div>
  );
}

export default App;
