import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './Pages/Layout';
import AddProjectForm from './Pages/Addprojectform';



const App = () => {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>}> </Route>
      <Route path="/addproject" element={<AddProjectForm/>}> </Route>
      </Routes>
    </Router>

  );
};

export default App;
