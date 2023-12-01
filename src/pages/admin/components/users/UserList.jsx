import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Card from "./Card";
import UserItem from "./UserItem";

const UserList = ({ data, msg, onActive }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (data.length === 0) {
      setSelectedUser(null);
    }
  }, [data]);

  const handleUserItemClick = (user) => {
    setSelectedUser((prevUser) => (prevUser?.id === user.id ? null : user));
  };

  const renderUserList = () => {
    if (data && data.length > 0) {
      return (
        <>
          {data.map((user) => (
            <UserItem
              key={user.id}
              data={user}
              onActive={onActive}
              isActive={selectedUser?.id === user.id}
              onUserItemClick={() => handleUserItemClick(user)}
            />
          ))}
        </>
      );
    } else if (msg) {
      return (
        <tr className="flex gap-4 p-2 text-sm cursor-default">
          <td className="w-full flex justify-center items-center text-center">Elemento no encontrado</td>
        </tr>
      );
    }
    return null;
  };

  const renderTableHeader = () => (
    <thead>
      <tr className="flex w-full gap-4 p-2">
        <th className="flex justify-center w-full">Código universitario</th>
        <th className="flex justify-center w-full">Nombres y apellidos</th>
        <th className="justify-center w-full hidden 2xl:flex">Correo universitario</th>
        <th className="justify-center flex w-full 2xl:hidden">Acciones</th>
      </tr>
    </thead>
  );

  const renderTableFooter = () => (
    <tfoot>
      <tr className="py-4 px-10 bg-white flex justify-center md:px-5 md:justify-end gap-2 ">
        <td className="w-10 first-line:p-2 hover:bg-first hover:text-white rounded-md flex items-center justify-center">
          <FontAwesomeIcon icon="fa-chevron-left" />
        </td>
        <td className="w-10 hover:bg-first p-2 hover:text-white rounded-md flex items-center justify-center">4</td>
        <td className="w-10 p-2 hover:bg-first hover:text-white rounded-md flex items-center justify-center">5</td>
        <td className="w-10 p-2 hover:bg-first hover:text-white rounded-md flex items-center justify-center">6</td>
        <td className="w-10 p-2 hover:bg-first hover:text-white rounded-md flex items-center justify-center">
          <FontAwesomeIcon icon="fa-chevron-right" />
        </td>
      </tr>
    </tfoot>
  );

  return (
    <section className="gap-4 w-full h-full flex flex-row overflow-hidden">
      <div className="flex flex-col gap-4  rounded-lg overflow-auto w-full">
        <table className="table-auto w-full h-full rounded-lg flex flex-col gap-2 bg-white">
          {renderTableHeader()}
          <tbody className="overflow-auto">{renderUserList()}</tbody>
          {renderTableFooter()}
        </table>
      </div>
      {selectedUser && <Card user={selectedUser} onActive={onActive}/>}
    </section>
  );
};

export default UserList;