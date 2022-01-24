import './App.css';
import Menu from './Components/aside/menu/Menu';
import Dashboard from './Components/dashboard/Dashboard';
import User from './Components/aside/user/User';
import Nav from './Components/aside/navigation/Nav';
import hamburger from './img/hamburger.png';
import { useState } from 'react';

function App() {
  const [ menuButton, setDisplay ] = useState('sm:hidden')
  
  const toggleMenu = () => {
    menuButton  === 'sm:hidden' 
    ? setDisplay('sm:block')
    :setDisplay('sm:hidden')
  }

  return (
    <div className="w-screen min-h-screen h-100 bg-[#1C3FAA] flex py-4 px-12  xl:px-1 sm:block">
      <div>
        <img src={hamburger} alt="Menu" className='hidden w-6 h-6 sm:block' onClick={()=>toggleMenu()}/>
      </div>
      <div className={`inline-block w-1/6 sm:absolute sm:z-50 sm:rounded-3xl sm:w-11/12 sm:bg-[#1C3FAA] ${menuButton}`} >
        <User />
        <Nav />
        <Menu />
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
