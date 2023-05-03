import './App.css';
import Navbar from './App Comps/Navbar';
import Textform from './App Comps/Textform';
import About from './App Comps/About';
import React, { useState } from 'react';
import Alert from './App Comps/Alert';
// react router dom@5
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
// whether  dark mode is enabled or not
  const [mode, setMode] = useState('light');

  // dark mode toggle
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743' ;
      showAlert('Dark Mode has been enabled', 'success');
      // document.title = ' TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white' ;
      showAlert('Light Mode has been enabled', 'success');
      // document.title = ' TextUtils'
    }
  }
  
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 2000)
  }


  return (
    <>
    <Router>
      <Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      <Switch>
        {/* use exact path */}
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <Textform showAlert={showAlert} head="TextUtils - Word Counter, Character Counter, LowerCase to UpperCase" mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
 }

export default App;