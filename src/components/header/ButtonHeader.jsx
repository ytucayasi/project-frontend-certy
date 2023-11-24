const ButtonHeader = ({text}) => {
    return (
        <button className="bg-first p-2 rounded-lg hover:bg-second">
            {text}
        </button>
    );
}

export default ButtonHeader;