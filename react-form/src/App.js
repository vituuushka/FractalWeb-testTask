import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main'


function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<Main/>} /> 
     {/* <Route path='/step1' element={<Step1/>} /> 
     <Route path='/step2' element={<Step2/>} /> 
     <Route path='/step3' element={<Step3/>} />  */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
