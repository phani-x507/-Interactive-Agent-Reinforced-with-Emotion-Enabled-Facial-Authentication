import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './sidebar';
import Loginpage from './Loginpage';
import RegistrationPage from './RegistrationPage';
import Home from './Home';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Registerface from './Registerface';

function App() {
  const buttonHandler = e => {
    e.preventDefault();
    
  }

  return (
    <div style={{ 'font-family': 'Poppins' }}>
      <BrowserRouter>

      <Routes>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path='/login' element = {<Loginpage/>}></Route>
        <Route path='/home' element = {<Home/>}></Route>
        <Route path='/register_face' element ={<Registerface />}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
