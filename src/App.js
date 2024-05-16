import Contacts from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
// import { useState } from 'react';
// import style from './style/style.module.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
//  const [status,setStatus]=useState("Home");
  return (
      <Router>
        <Navbar/>
        <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/Contacts' element={<Contacts/>}/>
            <Route  path='/Projects' element={<Projects/>}/>
        </Routes>
      </Router>
  );
}

export default App;
