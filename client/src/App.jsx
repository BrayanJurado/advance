
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  ProjectForm  from "./components/ProjectForm";
import  ProjectList  from "./components/ProjectList";
import  Navbar  from "./components/Navbar";
import { Container } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route  path="/" element={<ProjectList />} />
          <Route path="/projects/new" element={<ProjectForm />} />
          <Route path="/projects/:id/edit" element={<ProjectForm />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

