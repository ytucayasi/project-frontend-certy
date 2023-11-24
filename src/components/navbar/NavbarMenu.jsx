import { useState } from "react";

import NavbarMenuIcons from "./NavbarMenuIcons.jsx";

const NavbarMenu = ({listItems}) => {
    console.log(listItems);
    
    const navbarMenuItems = () => {
        return (listItems.map((item, index) => (
            <NavbarMenuIcons key={index} icon={item.icon} link={item.link} active={item.active}/> 
        )));
    }

    return (
        <ul className="flex flex-row gap-2 items-center px-2">
            {navbarMenuItems()}
        </ul>
    );
}

export default NavbarMenu;