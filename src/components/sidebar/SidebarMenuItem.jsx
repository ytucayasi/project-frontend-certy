import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SidebarMenuItem = ({ value, icon, route}) => {
    return (
        <Link to={route} className="bg-first hover:bg-second max-w-[20rem] w-full p-3 rounded-md flex flex-row justify-start items-center gap-2 cursor-pointer">
            <span className="w-8 flex items-center justify-center"><FontAwesomeIcon icon={icon}/></span>
            <span className="w-full overflow-auto">{value}</span>
        </Link>
    );
}

export default SidebarMenuItem;