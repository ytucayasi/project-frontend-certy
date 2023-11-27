import { useState } from "react";
import SidebarHeader from "./SidebarHeader.jsx";
import SidebarFooter from "./SidebarFooter.jsx";
import SidebarMenu from "./SidebarMenu.jsx";
import menuData from "/src/config/menuData.js";

const Sidebar = ({ onLogout, userAccess }) => {
  const filteredSidebarMenu = menuData.sidebarMenu.filter((item) => {
    return !item.allowedRoles || item.allowedRoles.includes(userAccess.rol_nombre);
  });

  return (
    <nav className="gap-5 bg-first text-white py-5 shadow-2xl h-screen col-span-5 hidden md:col-span-5 md:flex md:flex-col lg:col-span-4 2xl:col-span-3 all:col-span-2 wmax:col-span-1">
      <SidebarHeader user={userAccess} />
      <SidebarMenu listItems={filteredSidebarMenu} />
      <SidebarFooter listItems={menuData.sidebarFooter} onClick={onLogout} />
    </nav>
  );
};

export default Sidebar;
