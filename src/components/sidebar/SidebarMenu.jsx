import { useState } from "react";

import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = ({listItems}) => {
    const sidebarMenuItems = () => {
        return (
            listItems.map((item, index) => (
                <SidebarMenuItem key={index} value={item.value} icon={item.icon} route={item.route}/>
            ))
        );
    };

    return (
        <ul className="flex flex-col gap-2 h-full px-10 justify-start items-center overflow-y-auto">
            {sidebarMenuItems()}
        </ul>
    );
}

export default SidebarMenu;