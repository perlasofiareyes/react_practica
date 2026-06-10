import { BrowserRouter, Route, Routes, Outlet, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Login from './views/Login';
import Profile from './views/Profile';
import Contact from './views/Contact';
import Admin from './views/Admin';
import ResponsiveAppBar from './components/NavBar';
import Details from './components/Details';
import useAuth from './hooks/useAuth';
import LifeCycle from '';

const API_URL = "https://api-production-d98c3.up.railway.app"

function Layout({ isLogin, user, users, login, addUser, delUser }) {
  const location = useLocation();
  const hideNavbar = location.pathname === '/';

  return (
    <>
      {!hideNavbar && isLogin && <ResponsiveAppBar />}
      <Outlet context={{ isLogin, user, users, login, addUser, delUser }} />
    </>
  );
}

function App() {
  const {isLogin, token, user, login, logout } = useAuth()
  const {getUsers, delUser, addUser, users} = useAdmin(token)

  useEffect(() => {
    if (isLogin) {
      getUsers()
    }
  }, [isLogin]);
  return (
    <>
    <BrowserRouter>
    {isLogin && <ResponsiveAppBar logout={logout}/>}
    <Routes>
        <Route path='/' element={<Login login={login} />} />
        <Route path='/profile' element={<Profile user={user}/>} />
        <Route path='/admin' element={<Admin addUser={addUser} users={users} delUser={delUser} />} />
        <Route path='/users/:username' element={<Details users={users}/>}/>
    </Routes>
    </BrowserRouter>
    {show && <LifeCycle />}
    </>
  )
}

export default App;
