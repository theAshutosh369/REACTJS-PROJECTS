import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

import { Routes , Route } from 'react-router-dom';
import React from 'react';

function App() 
{

  return (
    <div className="App">

      <Header/>
      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="Contact" element={ <Contact/> } />
        <Route path="About" element={ <About/> } />
      </Routes>


    </div>
  );


}

export default App;

