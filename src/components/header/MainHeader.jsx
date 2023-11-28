import TplMainHeader from "/src/templates/TplMainHeader.jsx";
import ButtonHeader from "./ButtonHeader";
import SearchInput from "./SearchInput";

const MainHeader = ({ search, onToggle, buttonText, isInputVisible }) => {

  return (
    <TplMainHeader>
      <div className="flex gap-2">
        <ButtonHeader text={buttonText} onActive={onToggle}/>
{/*         <ButtonHeader text='Filtrar' /> */}
      </div>
      {isInputVisible && (
        <SearchInput
          placeholder='Ingresar solicitud'
          search={search}
        />
      )}
    </TplMainHeader>
  );
}

export default MainHeader;