import Link from "next/link";
import colors from "@/helpers/color";
import ImageDisplay from "@/helpers/ImageDisplay"
import Social from "../Ui/Social";
import MailIcon from '@mui/icons-material/Mail';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const color = colors();
    return (
        <>
            <div style={{ backgroundColor: color.secondaryColor }} className={`font-[family-name:var(--font-montserrat)] flex md:flex-row flex-col `}>
                <div style={{ borderColor: color.secondaryColor }} className=" bg-white border-1 md:px-[10em] md:w-1/3 md:rounded-r-full md:rounded-bl-none rounded-b-[5em] py-[2em] md:py-0 flex flex-col items-center md:justify-center">
                    <Link href="/">
                        <ImageDisplay src='/Icons.png' className='md:block max-w-lg object-contain mt-[-1em] ' alt='Background Image 1' width={180} />
                    </Link>
                    <div className="flex justify-between items-start gap-[1em]">
                        <Social />
                    </div>
                </div>

                <div className="flex flex-row justify-between py-[1.5em] px-[2em] md:px-[15em] md:py-[4em] md:w-2/3 ">
                    {/* Quick links */}
                    <div className="flex flex-col gap-y-[0.5em] ">
                        <h3 className="md:text-[17pt] text-[13pt] font-[700] ">Quick Links</h3>
                        <Link href="/course" className="text-[11.5pt] md:text-[14pt] ">Courses</Link>
                        <Link href="/university" className="text-[11.5pt] md:text-[14pt] ">IGNOU</Link>
                        <Link href="/about" className="text-[11.5pt] md:text-[14pt] ">About Us</Link>
                    </div>

                    {/* Quick links */}
                    <div className="flex flex-col gap-y-[0.5em] ">
                        <h3 className="md:text-[17pt] text-[13pt] font-[700] ">Contact Us</h3>
                        <Link href="tel:+919497428107" className="flex gap-[0.5em] items-center text-[11pt] text-gray-700 md:text-[14pt]">
                            <PhoneOutlinedIcon sx={{ display: { xs: 'none', md: 'block' }, fontSize: 30 }} />
                            +91 94974 28107
                        </Link>
                        <Link href="to:backup.inonline@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[11pt] flex gap-[0.5em] items-center text-gray-700 md:text-[14pt] ">
                            <MailIcon sx={{ display: { xs: 'none', md: 'block' }, fontSize: 30 }} />
                            backup.inonline@gmail.com
                        </Link>
                    </div>
                </div>
            </div>
            <div className="my-[1em] font-[family-name:var(--font-montserrat)] text-center md:text-[15.5pt] text-[12pt] px-[2em]  ">
                Copyright ©{currentYear}. All rights reserved and maintained by <Link href="https://muhammedsuhail.netlify.app/" style={{ color: color.tertiaryColor }} className="">Muhammed Suhail</Link> for <span style={{ color: color.primaryColor }} className="font-[800] ">BackUp.<span style={{ color: color.secondaryColor }}>in</span></span>.
            </div>
        </>
    )
}