// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Menu from './Components/Menu';








function App() {
  return (
    <div className="App">
     
    {/* <Navbar/> */}

      <Routes>
      <Route path='/' element={<><Navbar/></>}/>
      <Route path='/' element={<><Home/></>}/>
        <Route path='/log' element={<><Navbar/><Login/></>}/>
        <Route path='/sign' element={<><Navbar/><Signup/></>}/>
        <Route path='/home' element={<><Navbar/><Home/></>}/>
        <Route path='/Menu' element={<Menu/>}/>
      </Routes> 

   
    </div>
  );
}

export default App;
