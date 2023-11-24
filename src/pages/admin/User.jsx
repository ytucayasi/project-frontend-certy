import { useState, useEffect } from "react";
import UserList from "./components/users/UserList";
import MainHeader from "/src/components/header/MainHeader.jsx";
import userService from "/src/services/user.service";

const User = () => {
  const [users, setUsers] = useState([]);

  const searchUserById = async (userId) => {
    try {
      let response;
      console.log(userId);
      if (userId) {
        response = await userService.get(userId);
        setUsers(response.data ? [response.data] : []);
      } else {
        response = await userService.getAll();
        setUsers(response.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <>
      <MainHeader searchUserById={searchUserById} />
      <UserList data={users}/>
    </>
  );
}

export default User;