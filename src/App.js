import './App.css';
import Mockman from "mockman-js";
import { NavLink, Route, Routes } from 'react-router-dom';
import { Register } from './pages/auth/register/Register';
import { Signup } from './pages/auth/signup/Signup';
import { Login } from './pages/auth/login/Login';

function App() {
  return (
    <div className="App">
      <nav className='fake-nav' style={{display:""}}>
      <NavLink to="/mockman">Mockman</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>



      </nav>
      <Routes>
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/register" element={< Register/>} />
      <Route path="/signup" element={< Signup/>} />
      <Route path="/login" element={< Login/>} />



      
      </Routes>

    </div>
  );
}

export default App;
