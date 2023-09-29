import './App.css';
import Sarim from './components/Sarim';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,  setMode]  = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode has been enabled", "Success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "#9aeabc"
      showAlert("Light mode has been enabled", "Success")
    }
  }

  return (
    <>
    <Sarim title="Sasha" about="Model" mode={mode} toggleMode={toggleMode}/>
    <Navbar/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Forms heading="Enter text to analyze:" mode={mode}/>
    <About/>
    </div>
    </>
    );}

export default App;