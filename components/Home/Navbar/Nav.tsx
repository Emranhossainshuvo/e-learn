"use client";

import { Navlink } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            };
            if (window.scrollY < 90) {
                setNavBg(false);
            };
        }
        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler)

    }, [])

    return (
        <div className={`fixed ${navBg ? "bg-indigo-800" :"fixed"} w-full transition-all duration-150 h-[12vh] z-[1000] bg-blue-700`}>
            <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto">
                <Image src={"/images/icons8-shop-100.png"} width={120} height={120} alt="website logo icon"></Image>
                <div className="hidden items-center space-x-10 lg:flex">
                    {Navlink.map((link) => {
                        return <Link key={link.id} href={link.url}>
                            <p className="nav__link">{link.label}</p>
                        </Link>
                    })}
                </div>
                <div className="flex items-center space-x-4">
                    <button className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg">Signup now</button>
                    <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden" />
                </div>
            </div>
        </div>
    );
};

export default Nav;