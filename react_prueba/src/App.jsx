import { BrowserRouter, Route, Routes, Outlet, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Login from './views/Login';
import Profile from './views/Profile';
import Contact from './views/Contact';
import Admin from './views/Admin';
import ResponsiveAppBar from './components/NavBar';

const API_URL = "https://api-production-d98c3.up.railway.app/"

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
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState([]);
  const [users, setUsers ] = useState([])

  useEffect(() => {
    if (isLogin) {
      const getUsers = async () => {
        const res = await fetch(API_URL + "/api/users", { headers: { authorization: "Bearer " + token } })
        const data = await res.json();
        setUsers(data);
      }
      getUsers();
    }
  }, [isLogin]);

  const login = async (username, password) => {
    const res = await fetch(API_URL + "/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.login) {
      setIsLogin(true);
      setUser(data.user);
      setToken(data.token);
      return data;
    }
    return false;
  };

  const addUser = async (newUser) => {
    const res = await fetch(API_URL + "/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json", authorization:token},
      body: JSON.stringify(newUser)
    });
    const data = await res.json();
    setUsers(prev => [...prev, data]);
  };

  const delUser = async (id) => {
    setUsers(prev => prev.filter(u => u._id !== id));
    await fetch(API_URL + "/api/users/" + id, { method: "DELETE", headers: { authorization: "Bearer " + token } });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout isLogin={isLogin} user={user} users={users} login={login} addUser={addUser} delUser={delUser} />}>
          <Route path='/' element={<Login />} />
          <Route path='/profile' element={isLogin ? <Profile /> : <Navigate to="/" />} />
          <Route path='/contact' element={isLogin ? <Contact /> : <Navigate to="/" />} />
          <Route path='/admin' element={isLogin ? <Admin /> : <Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
