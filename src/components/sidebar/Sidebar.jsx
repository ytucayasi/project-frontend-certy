import { useState } from "react";

import SidebarHeader from "./SidebarHeader.jsx";
import SidebarFooter from "./SidebarFooter.jsx";
import SidebarMenu from "./SidebarMenu.jsx";
import userData from "/src/config/userData.js";
import menuData from "/src/config/menuData.js";

const Sidebar = () => {
    return (
        <nav className="gap-5 bg-first text-white py-5 shadow-2xl h-screen col-span-5 hidden md:col-span-5 md:flex md:flex-col lg:col-span-4 2xl:col-span-3 all:col-span-2 wmax:col-span-1">
            <SidebarHeader user={userData}/>
            <SidebarMenu listItems={menuData.sidebarMenu}/>
            <SidebarFooter listItems={menuData.sidebarFooter}/>
        </nav>
    );
}

export default Sidebar;