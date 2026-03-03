'use client'

import { NavMenu } from "@/shared/components/custom-ui/nav-menu/NavMenu";
import { navMenuItems } from "./nav.data";

export function Header() {
    return <header className="p-5">
        <NavMenu menu={navMenuItems}/>
    </header>;
}