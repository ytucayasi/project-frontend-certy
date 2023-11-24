import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SearchInput = ({ placeholder, onSearchUserById }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchUserById(value);
  };

  return (
    <div className="flex items-center w-full md:w-fit">
      <span className="p-2 bg-white rounded-s-lg">
        <FontAwesomeIcon className="text-first" icon='fa-magnifying-glass' />
      </span>
      <input
        className="text-first outline-none rounded-e-lg p-2 w-full md:w-fit"
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchInput;