// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
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
      document.body.style.backgroundColor='rgb(18, 31, 32)';
      document.getElementById('navbar').style.border= 'none';
      document.getElementById('navbar').style.boxShadow= 'none';
      document.body.style.color = 'rgb(198, 230, 214)'
      document.getElementById('textBox').style.backgroundColor = 'rgb(48, 62, 62)'
      document.getElementById('textBox').style.color = 'rgb(219, 255, 237)'
      document.getElementById('outBox').style.color = 'rgb(219, 255, 237)'
      document.getElementById('outBox').style.backgroundColor = 'rgb(48, 62, 62)'
      document.getElementById('heading').style.color = 'rgb(49, 117, 255)'
    }
    else{
      setIcon('dark')
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='rgb(25, 40, 33)';
      document.getElementById('navbar').style.border= '1px solid rgb(152, 255, 204)';
      document.getElementById('navbar').style.boxShadow= '0 2px 10px rgb(141, 160, 150)';
      document.getElementById('textBox').style.backgroundColor = 'rgb(241, 255, 248)'
      document.getElementById('textBox').style.color = 'rgb(25, 40, 33)'
      document.getElementById('outBox').style.color = 'rgb(25, 40, 33)'
      document.getElementById('outBox').style.backgroundColor = 'rgb(241, 255, 248)'
      document.getElementById('heading').style.color = 'rgb(12, 93, 255)'

      
    }
  }
  return (
    <>
    
      <Navbar title="TextUtils" mode={mode} icon={icon} toggleMode={toggleMode} />
        
      <Routes>
        <Route exact path="/about" element={<About aboutTitle="TexTils" />}/>
        <Route exact path="/" element={<TextForm heading="TexTils" />}/>
      </Routes>
        
     
    </>
  );
}

export default App;
