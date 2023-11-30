import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import NavbarPageInfo from "./NavbarPageInfo.jsx";
import NavbarMenu from "./NavbarMenu.jsx";
import NavbarUserImage from "./NavbarUserImage.jsx";
import userData from "/src/config/userData.js";
import menuData from "/src/config/menuData.js";

const Navbar = () => {
    const pageTemp = 'Inicio';

    return (
        <nav className="bg-first text-white flex flex-row justify-between items-center shadow-lg px-5 py-5 h-20 md:px-10 relative z-[1]">
            <div className="flex items-center gap-4">
                <div className="p-2 text-center rounded-sm w-10 cursor-pointer md:hidden hover:bg-second">
                    <FontAwesomeIcon icon='fa-bars' size="lg"/>
                </div>
                <NavbarPageInfo pageName={pageTemp} />
            </div>
            <div className="flex items-center">
                <NavbarUserImage user={userData} />
            </div>
        </nav>
    );
}

export default Navbar;