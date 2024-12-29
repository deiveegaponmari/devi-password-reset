import { useState } from 'react'
import './App.css';
import {Routes,Route} from "react-router";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Notfound from './pages/NotFound';
import EmailVerify from './pages/EmailVerify';
import ForgotPassword_Form from './pages/ForgotPassword_Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Routes>
          <Route Component={Signup} path='/signup'></Route>
          <Route Component={Signin} path='/login'></Route>
          <Route Component={Home} path='/'></Route>
          <Route Component={EmailVerify} path='/EmailVerify'></Route>
          <Route Component={ForgotPassword_Form} path='/ForgotPassword'></Route>
          <Route Component={Notfound} path='*'></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
