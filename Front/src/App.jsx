import { useState } from 'react'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUpUser from './assets/pages/signUpUser';
import { CreateTask } from './assets/pages/CreateTask';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SingUpUser />}/>
          <Route path="/CreateTask" element={<CreateTask />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
