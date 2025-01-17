import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import SignUpPage from './SignUppage/SignUpPage';
import DashboardPage from './DashboardPage/DashboardPage';
import MainSignup_2 from './SignUppage/MainSignup_2';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<SignUpPage/>}></Route>
    <Route path="/Saas" element={<SignUpPage/>}></Route>

    <Route path="/Dashboard" element={<DashboardPage/>}></Route>
    <Route path="/Self_hosted" element={<MainSignup_2/>}></Route>


  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
