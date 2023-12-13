import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Step1 from './components/Step1/Step1'
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<Main/>} /> 
     <Route path='/step1' element={<Step1/>} /> 
     <Route path='/step2' element={<Step2/>} /> 
    <Route path='/step3' element={<Step3/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
