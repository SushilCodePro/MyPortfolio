import About from './pages/About';
import Home from './pages/Home';
import Items from './pages/Items';
import Navbar from './components/Navbar';
import { useState } from 'react';
// import style from './style/style.module.css'

function App() {
 const [status,setStatus]=useState("Home");
  return (
    <>
      <Navbar setStatus={setStatus}/>
      {status==="Home"&&<Home/>} 
      {status==="About"&&<About/>} 
      {status==="Items"&&<Items/>} 
    </>
  );
}

export default App;
