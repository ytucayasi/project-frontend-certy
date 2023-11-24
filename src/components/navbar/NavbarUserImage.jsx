import { useState } from "react";

const NavbarUserImage = ({user}) => {
    return (
        <figure className="w-10">
            <img className="w-full rounded-full border-2 cursor-pointer" src={user.image} alt={user.imageAlt} />
        </figure>
    );
}

export default NavbarUserImage;