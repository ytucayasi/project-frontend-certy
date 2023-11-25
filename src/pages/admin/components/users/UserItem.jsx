import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserItem = ({ onUserItemClick, data }) => {
  const handleActiveCard = () => {
    onUserItemClick(true);
  }

  return (
    <tr className="flex gap-4 2xl:hover:cursor-pointer 2xl:hover:bg-active 2xl:hover:text-white p-2 text-sm cursor-default" onClick={handleActiveCard}>
      <td className="w-full flex justify-center items-center text-center">{data.id}</td>
      <td className="w-full flex justify-center items-center">{data.nombre}</td>
      <td className="w-full justify-center hidden 2xl:flex">{data.estado}</td>
      <td className="w-full justify-center hidden 2xl:flex">{data.correo}</td>
      <td className="w-full flex justify-center 2xl:hidden items-center gap-2">
        <button className="bg-active hover:bg-blue-600 text-white p-2 rounded-md">
          <span className="w-5 h-5 flex items-center justify-center"><FontAwesomeIcon icon='fa-eye' /></span>
        </button>
        <button className="bg-active hover:bg-blue-600 text-white p-2 rounded-md">
          <span className="w-5 h-5 flex items-center justify-center"><FontAwesomeIcon icon='fa-message' /></span>
        </button>
      </td>
    </tr>
  );
}

export default UserItem;