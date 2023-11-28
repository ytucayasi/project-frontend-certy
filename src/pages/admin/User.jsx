import { useState, useEffect } from "react";
import UserList from "./components/users/UserList";
import MainHeader from "/src/components/header/MainHeader.jsx";
import userService from "/src/services/user.service";
import { Routes, Route } from "react-router-dom";
import UserCreate from "./components/users/UserCreate";

const User = () => {
  const [users, setUsers] = useState([]);
  const [selectData, setSelectData] = useState([]);
  const [msg, setMsg] = useState('');
  const [active, setActive] = useState(false);
  const [text, setText] = useState('Registrar');
  const [inputVisible, setInputVisible] = useState(true);

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

  const eventActive = (dataSelect) => {
    if (dataSelect && !active) {
      setSelectData(dataSelect);
    } else {
      setSelectData([]);
    }
    setActive((prevActive) => !prevActive);
    setText((prevText) => (prevText === 'Registrar' ? 'Listar' : 'Registrar'));
    setInputVisible((prevInputVisible) => !prevInputVisible);
    searchUsercodU();
    console.log(dataSelect);
  }

  return (
    <>
      <MainHeader
        search={searchUsercodU}
        onToggle={eventActive}
        buttonText={text}
        isInputVisible={inputVisible} />
      {active ? <UserCreate onActive={eventActive} data={selectData}/> : <UserList data={users} msg={msg} onActive={eventActive}/>}
    </>
  );
}

export default User;