import { useState } from "react";

import SidebarUserImage from './SidebarUserImage.jsx';

const SidebarHeader = ({ user }) => {
    return (
        <article className="flex flex-col items-center justify-center gap-3">
            <section>
                <SidebarUserImage user={user} />
            </section>
            <section className="font-raleway-bold">
                {user.userName}
            </section>
        </article>
    );
}

export default SidebarHeader;