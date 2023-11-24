import SidebarFooterItem from "./SidebarFooterItem.jsx";

const SidebarFooter = ({listItems}) => {
    const sidebarFooterItems = () => {
        return (
            listItems.map((item, index) => (
                <SidebarFooterItem key={index} value={item.value} icon={item.icon} color={item.color} hoverColor={item.hoverColor}/>
            ))
        );
    };

    return (
        <ul className="flex flex-col gap-2 px-10 justify-center items-center">
            {sidebarFooterItems()}
        </ul>
    );
}

export default SidebarFooter;