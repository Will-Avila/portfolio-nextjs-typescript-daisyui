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
        <nav className="container drawer font-semibold mx-auto">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="navbar w-full px-0">
                    <div className="flex-none md:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost justify-start">
                            <FaBars size={24} />
                        </label>
                    </div>
                    <div className="flex-1 justify-end md:justify-start"><Logo /></div>
                    <div className="hidden flex-none md:block items-center">
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
                <ul className="menu bg-base-200 min-h-full w-3/4">
                    <li className="flex flex-row border-b mb-4 pb-4 items-center"
                        onClick={closeDrawer}>
                        <Logo />
                        <span onClick={closeDrawer} className="absolute right-0  top-0 flex text-2xl">x</span>
                    </li>
                    {menu.map((item) => (
                        <li key={item.id}><Link onClick={closeDrawer} href={item.url}>{item.name}</Link></li>
                    ))}
                </ul>
            </div >
        </nav >
    )
}
