'use client'

import Link from "next/link";
import ButtonUi from "../Ui/Button";
import DrawerUi from "../Ui/Drawer";
import { useState, useEffect } from "react";
import ImageDisplay from "@/helpers/ImageDisplay.tsx"

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
        <div className={`font-[family-name:var(--font-montserrat)] md:px-[10em] ${isFixed ? "h-[7vh]" : "h-[10vh]"} px-[10px] bg-white flex justify-between items-center w-full transition-all duration-300 ${isFixed ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""}`}>
            <Link href="/" className="text-xl flex items-center">
                <ImageDisplay src='/Icon.png' className='md:block h-[4em] max-w-lg object-contain ' alt='Background Image 1' width={isFixed ? 130 : 150 } />
            </Link>
            {/* Links */}
            <div className="hidden md:flex gap-[5em] items-center">
                <Link href="/course" className="font-[700]">Courses</Link>
                <Link href="/university" className="font-[700]">IGNOU</Link>
                <Link href="/about" className="font-[700]">About Us</Link>
                <ButtonUi text="Enquire" />
            </div>

            {/* Drawer */}
            <div className="md:hidden">
                <DrawerUi />
            </div>
        </div>
    );
}