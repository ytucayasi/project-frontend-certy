import { useState, useEffect } from "react";
import UserList from "./components/users/UserList";
import MainHeader from "/src/components/header/MainHeader.jsx";
import userService from "/src/services/user.service";

const User = () => {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState('');

  const searchUsercodU = async (codU) => {
    try {
      if (codU) {
        const response = await userService.get(codU);
        if (response.data) {
          setUsers(response.data);
        } else {
          setUsers([]);
          console.log('Usuario no encontrado');
        }
      } else {
        const response = await userService.getAll();
        setUsers(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setUsers([]);
        setMsg('Elemento no encontrado')
      } else {
        console.error('Error fetching users:', error);
      }
    }
  };

  useEffect(() => {
    searchUsercodU();
  }, []);

  return (
    <>
      <MainHeader searchUsercodU={searchUsercodU} />
      <UserList data={users} msg={msg}/>
    </>
  );
}

export default User;