import React,{useState} from 'react';
import ReactDOM from 'react-dom'; 
import RenderTask from './renderTask'; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
    return (
      <Router>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>}/>
          <Route path="/:id" element={<RenderTask/>} />
          <Route path="*" element={<h1>Page Not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
