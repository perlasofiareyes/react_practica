import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './views/Login';
import Profile from './views/Profile';
import Contact from './views/Contact';
import ResponsiveAppBar from './components/NavBar';

function Layout() {
  const location = useLocation();

  // ocultar navbar en login
  const hideNavbar = location.pathname === '/';

  return (
    <>
      {!hideNavbar && <ResponsiveAppBar />}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;