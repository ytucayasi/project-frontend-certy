import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CertiItem = ({ onItemClick, data, isActive }) => {
  const handleItemClick = () => {
    onItemClick(data);
  };

  return (
    <tr
      className={`flex gap-4 2xl:hover:cursor-pointer 2xl:hover:bg-active 2xl:hover:text-white text-first ${isActive ? "2xl:bg-active 2xl:text-white" : ""
        } p-2 text-sm cursor-default`}
      onClick={handleItemClick}
    >
      <td className="w-full flex justify-center items-center text-center">{data.certificado.id}</td>
      <td className="w-full flex justify-center items-center text-center">{`${data.estudiante.nombres} ${data.estudiante.apellidos}`}</td>
      <td className="w-full justify-center hidden 2xl:flex items-center">{data.estudiante.dni}</td>
      <td className="w-full justify-center hidden 2xl:flex items-center">{data.estudiante.codigo_universitario}</td>
      <td className="w-full justify-center hidden 2xl:flex items-center">{data.certificado.nombre_certificado}</td>
      <td className="w-full flex justify-center 2xl:hidden items-center gap-2">
        <button className="bg-active hover:bg-blue-600 text-white p-2 rounded-md" onClick={(e) => e.stopPropagation()}>
          <span className="w-5 h-5 flex items-center justify-center">
            <FontAwesomeIcon icon="fa-eye" />
          </span>
        </button>
      </td>
    </tr>
  );
};

export default CertiItem;