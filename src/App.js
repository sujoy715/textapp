
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import React, {useState} from 'react';
function App() {
  const [mode, setmode]=useState("light");
  const [alert,setAlert]=useState("null");
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert("null")
      }, 2000);

  }

  const enablemode=()=>{
    if (mode==='light') {
      setmode('dark');
     document.body.style.backgroundColor='black';
     document.body.style.color='white';
     showAlert("dark mode is enabled ","success ")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("light mode is enabled", "success ")
    }
  }
  return (
    <>
      <Navbar aboutText="about" mode={mode} enablemode={enablemode}/>
      <Alerts alert= {alert}/>
      <div className="container my-3">
      <Textfrom showAlert={showAlert} heading="Enter your text"/>
      </div>
      
    </>
  );

}

export default App;
