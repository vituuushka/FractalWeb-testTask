import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const Step0 = () => {
  return (
    <div>Step0</div>
  )
}
const Step1 = () => {
  return (
    <div>Step1</div>
  )
}
const Step2 = () => {
  return (
    <div>Step2</div>
  )
}
const Step3 = () => {
  return (
    <div>Step3</div>
  )
}
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<Step0/>} /> 
     <Route path='/step1' element={<Step1/>} /> 
     <Route path='/step2' element={<Step2/>} /> 
     <Route path='/step3' element={<Step3/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
