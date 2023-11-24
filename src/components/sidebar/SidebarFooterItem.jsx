import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarFooterItem = ({ value, icon, color, hoverColor }) => {
    const styles = `w-full max-w-[20rem] p-3 rounded-md flex justify-center items-center cursor-pointer ${color} ${hoverColor}`;
    return (
        <li className={styles}>
            <span className="w-8 flex items-center justify-center"><FontAwesomeIcon icon={icon} /></span> {value}
        </li>
    );
}

export default SidebarFooterItem;