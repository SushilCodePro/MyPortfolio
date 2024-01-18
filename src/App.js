import About from './pages/About';
import Home from './pages/Home';
import Items from './pages/Items';
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
            <Route  path='/About' element={<About/>}/>
            <Route  path='/Items' element={<Items/>}/>
        </Routes>
      </Router>
  );
}

export default App;
