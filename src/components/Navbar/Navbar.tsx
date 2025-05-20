'use client'

import Link from "next/link";
import ButtonUi from "../Ui/Button";
import DrawerUi from "../Ui/Drawer";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) setIsFixed(true);
            else setIsFixed(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`font-[family-name:var(--font-montserrat)] md:px-[10em] ${isFixed ? "h-[7vh]" : "h-[10vh]"} px-[10px] flex justify-between items-center bg-[#5fa8d3] dark:bg-[#003566] w-full transition-all duration-300 ${isFixed ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""}`}>
            <Link href="/" className="text-xl flex items-center">
                <img
                    src="/IconImage.png"
                    alt="Icon"
                    className="w-full h-[3em] md:h-[3.5em] max-w-lg  object-contain"
                />
                <img
                    src="/Name.png"
                    alt="Icon"
                    className="w-full hidden md:block h-[4em] max-w-lg  object-contain"
                />
            </Link>
            {/* Links */}
            <div className="hidden md:flex gap-[5em] items-center">
                <Link href="/course">Courses</Link>
                <Link href="/university">IGNOU</Link>
                <Link href="/about">About Us</Link>
                <ButtonUi text="Enquire" />
            </div>

            {/* Drawer */}
            <div className="md:hidden">
                <DrawerUi />
            </div>
        </div>
    );
}