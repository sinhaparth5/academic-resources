import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Album, Menu } from "lucide-react";

export default function NavBar() {
    return (
        <nav className="asNav">
            <div className="asNavInner">
                <div className="pl-4 flex items-center">
                    <a className="asLogo" href="#home">
                        <Album size={36} />
                        ACADEMIC RESOURCES
                    </a>
                </div>
                <div className="block lg:hidden pr-4">
                    <button className="asHamburger">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
                        </li>
                    </ul>
                    <Button asChild className="mx-auto lg:mx-0 hover:text-white hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <Link href="/login">Login</Link>
                    </Button>
                    </div>
                </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    )
}