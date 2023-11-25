const ButtonHeader = ({ text, onActive }) => {
  const handleClick = () => {
    onActive();
  };

  return (
    <button className="bg-first p-2 rounded-lg hover:bg-second" onClick={handleClick}>
      {text}
    </button>
  );
}

export default ButtonHeader;