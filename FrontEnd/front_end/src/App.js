import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './sidebar';
import Loginpage from './Loginpage';
import RegistrationPage from './RegistrationPage';
import Registerface from './Registerface';

function App() {
  const buttonHandler = e => {
    e.preventDefault();
  }

  return (
    <div style={{ 'font-family': 'Poppins' }}>
     <Registerface />
    </div>
  )
}

export default App
