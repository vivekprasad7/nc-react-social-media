import './App.css';
import Mockman from "mockman-js";
import { NavLink, Route, Routes } from 'react-router-dom';
import { Register } from './pages/auth/register/Register';
import { Signup } from './pages/auth/signup/Signup';
import { Login } from './pages/auth/login/Login';
import { Home } from './pages/home/Home';
import { Profile } from './pages/profile/Profile';
import { Explore } from './pages/explore/Explore';
import { Bookmarks } from './pages/bookmarks/Bookmarks';
import { CreatePost } from './components/create-post/CreatePost';
import { useAuthContext } from './contexts/authContext';
import { Toaster } from 'react-hot-toast';
import { RequiresAuth } from './components/RequiresAuth';

function App() {
  const {displayProps} = useAuthContext();
  return (
    <>
    <div className="App">
      <div className='blur'></div>
      <div className='blur'></div>


      <nav className='fake-nav' style={{display:""}}>
      <NavLink to="/mockman">Mockman</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>


      </nav>

      <Routes>
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/register" element={< Register/>} />
      <Route path="/signup" element={< Signup/>} />
      <Route path="/login" element={< Login/>} />

      <Route element={<RequiresAuth/>}>
      <Route path="/" element={< Home/>} />
      <Route path="/profile" element={< Profile/>} />
      <Route path="/explore" element={< Explore/>} />
      <Route path="/bookmarks" element={< Bookmarks/>} />
      </Route>


      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          bottom: "1rem",
          right: "1rem",
          fontSize: "0.9rem",
        }}
      />

    </div>
    <div>
      { displayProps && <CreatePost/>}
       {/* {showEditModal && (<EditPost post={postItem} showEditModal={showEditModal} setShowEditModal={setShowEditModal}/>)} */}
    </div>
    </>

  );
}

export default App;
