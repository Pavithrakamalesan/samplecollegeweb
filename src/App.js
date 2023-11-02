import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './component1/Home';
import About from './component1/About';
import Contact from './component1/Contacts';
import TodoList from './component1/ToDolist';
import Navigation from './Navigation/Navigation';
function App(){
  return(
  <Router>
    <div>
    <Navigation />
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='todolist' element={<TodoList />}></Route>
      </Routes>
      </div>
      </Router>
    
  );
}
export default App;