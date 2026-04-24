import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';


const Admin = () => {
  const { users, addUser, delUser } = useOutletContext();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = async () => {
    if (!name || !username || !password) return;
    await addUser({ name, username, password });
    setName("");
    setUsername("");
    setPassword("");
  };
};

export default Admin;
