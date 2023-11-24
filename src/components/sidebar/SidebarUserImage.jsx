import { useState } from "react";

const SidebarUserImage = ({user}) => {
    return (
        <figure className="w-32">
            <img className="border-2 border-white w-full rounded-full" src={user.image} alt={user.altImage} />
        </figure>
    );
}

export default SidebarUserImage;