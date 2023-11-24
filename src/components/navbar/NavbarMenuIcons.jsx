import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarMenuIcons = ({ icon, link, active }) => {
    const activeColor = active === true ? 'text-active': 'text-third';
    const styles = `w-1 ${activeColor}`;

    return (
        <li className="flex flex-col gap-1 items-center justify-center border-second border-2 rounded-md p-1 h-8 w-8 cursor-pointer hover:border-white">
            <FontAwesomeIcon icon={icon} size="xs"/>
            <FontAwesomeIcon icon='fa-circle' className={styles}/>
        </li>
    );
}

export default NavbarMenuIcons;