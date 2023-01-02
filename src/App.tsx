import React from 'react';
import LoginForm  from './components/LoginForm';
import './App.css';
import { Form } from 'antd';

function App() {
  return (
    <div className="App">
        <div className='login_container'>
          <div className='header'>
            <h1> Simple Crud Application</h1>
          </div>
          <br />
          <br />
          <div><LoginForm></LoginForm></div>
        </div>
        <div className='result_container'>
          <div className='result_header'><h1>Results Table</h1></div>
        </div>
    </div>
  );
}

export default App;
