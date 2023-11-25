import TplMainHeader from "/src/templates/TplMainHeader.jsx";
import ButtonHeader from "./ButtonHeader";
import SearchInput from "./SearchInput";

const MainHeader = ({ searchUsercodU, onActive, text, inputVisible }) => {

  return (
    <TplMainHeader>
      <div className="flex gap-2">
        <ButtonHeader text={text} onActive={onActive}/>
{/*         <ButtonHeader text='Filtrar' /> */}
      </div>
      {inputVisible && (
        <SearchInput
          placeholder='Ingresar solicitud'
          onSearchUsercodU={searchUsercodU}
        />
      )}
    </TplMainHeader>
  );
}

export default MainHeader;