import { useState, useEffect } from "react";
import TplMainHeader from "/src/templates/TplMainHeader.jsx";
import ButtonHeader from "./ButtonHeader";
import SearchInput from "./SearchInput";

const MainHeader = ({ searchUserById }) => {

  return (
    <TplMainHeader>
      <div className="flex gap-2">
        <ButtonHeader text='Registrar' />
        <ButtonHeader text='Filtrar' />
      </div>
      <SearchInput
        placeholder='Ingresar solicitud'
        onSearchUserById={searchUserById}
      />
    </TplMainHeader>
  );
}

export default MainHeader;