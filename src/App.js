// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [icon, setIcon] = useState('dark')

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      setIcon('light')
      document.body.style.backgroundColor='rgb(31, 19, 27)';
      document.body.style.color = 'rgb(255, 241, 248)'
      document.getElementById('textBox').style.backgroundColor = 'rgb(62, 48, 58)'
      document.getElementById('textBox').style.color = 'white'
      document.getElementById('outBox').style.color = 'white'
      document.getElementById('outBox').style.backgroundColor = 'rgb(62, 48, 58)'
      document.getElementById('heading').style.color = 'rgb(255, 53, 124)'
      document.getElementById('navbar').style.boxShadow= 'none';
    }
    else{
      setIcon('dark')
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='rgb(25, 40, 33)';
      document.getElementById('navbar').style.boxShadow= '0 2px 10px rgb(184, 142, 169)';
      document.getElementById('textBox').style.backgroundColor = 'rgb(255, 241, 249)'
      document.getElementById('textBox').style.color = 'black'
      document.getElementById('outBox').style.color = 'black'
      document.getElementById('outBox').style.backgroundColor = 'rgb(255, 241, 249)'
      document.getElementById('heading').style.color = 'rgb(199, 0, 70)'
      
    }
  }
  return (
    <>
    
      <Navbar title="TexTils" mode={mode} icon={icon} toggleMode={toggleMode} />
        
      <Routes>
        <Route exact path="/"  element={<TextForm heading="TexTils" icon={icon} />}/>
      </Routes>
        
     
    </>
  );
}

export default App;
