import { useState } from "react";

import SidebarUserImage from './SidebarUserImage.jsx';

const SidebarHeader = ({ user }) => {
    return (
        <article className="flex flex-col items-center justify-center gap-1 py-2">
            {/* <section>
                <SidebarUserImage user={user.foto} />
            </section> */}
            <section className="font-raleway-bold text-xl text-center px-4">
                {user.nombre}
            </section>
            <section className="font-raleway-bold text-xs text-center px-4">
                {user.rol_nombre}
            </section>
        </article>
    );
}

export default SidebarHeader;