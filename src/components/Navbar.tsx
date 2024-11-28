"use client"

import Link from "next/link";
import menu from "@/data/menu";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    function closeDrawer() {
        const drawer = document.querySelector<HTMLInputElement>('#my-drawer-3');
        if (drawer) {
            drawer.checked = false;
        }
    }

    return (
        <nav className="drawer font-semibold">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="navbar w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <FaBars size={24} />
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2"><Logo /></div>
                    <div className="hidden flex-none lg:block items-center">
                        <ul className="menu menu-horizontal">
                            {menu.map((item) => (
                                <li key={item.id}><Link href={item.url}>{item.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-60 p-4">
                    <li onClick={closeDrawer}><Logo /></li>
                    {menu.map((item) => (
                        <li key={item.id}><Link onClick={closeDrawer} href={item.url}>{item.name}</Link></li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
