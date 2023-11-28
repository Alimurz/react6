import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/Index';
import AboutUs from './Pages/AboutUS/Index';
import SignIn from './Pages/SignIn/Index';


function App() {
  return (
    <div className="App">
      <nav className='header'>
          <div>
          <Link to='/' className='link2'>Home</Link>
          </div>
          <div className=''>
          <Link to='/aboutus' className='link2'>AboutUS</Link>  
          <Link to='/sign' className='link2'>SignIn</Link>  
          </div>
      </nav>
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/aboutus' element={<AboutUs />}></Route>
      <Route path='/sign' element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
