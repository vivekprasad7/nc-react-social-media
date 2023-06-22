import './App.css';
import Mockman from "mockman-js";
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <nav>
      <NavLink to="/mockman">Mockman</NavLink>
      </nav>
      <Routes>
      <Route path="/mockman" element={<Mockman />} />
      </Routes>

    </div>
  );
}

export default App;
