import Link from "next/link";
import colors from "@/helpers/color";
import ImageDisplay from "@/helpers/ImageDisplay"

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const color = colors();
    return (
        <>
            <div style={{backgroundColor: color.secondaryColor}} className={`font-[family-name:var(--font-montserrat)] flex md:flex-row flex-col `}>
                <Link href="/" style={{borderColor: color.secondaryColor}} className="text-xl bg-white border-1 md:px-[10em] md:w-1/3 md:rounded-r-full md:rounded-bl-none rounded-b-[5em] py-[2em] md:py-0 flex flex-row items-center justify-center">
                    <ImageDisplay src='/Icons.png' className='md:block max-w-lg object-contain ' alt='Background Image 1' width={180} />
                </Link>

                <div className="flex flex-row justify-between py-[1.5em] px-[3em] md:px-[15em] md:py-[4em] md:w-2/3 ">
                    {/* Quick links */}
                    <div className="flex flex-col gap-y-[0.5em] ">
                        <h3 className="md:text-[17pt] text-[13pt] font-[700] ">Quick Links</h3>
                        <Link href="/course" className="text-[11.5pt] md:text-[14pt] ">Courses</Link>
                        <Link href="/university" className="text-[11.5pt] md:text-[14pt] ">IGNOU</Link>
                        <Link href="/about" className="text-[11.5pt] md:text-[14pt] ">About Us</Link>
                    </div>

                    {/* Quick links */}
                    <div className="flex flex-col gap-y-[0.5em] ">
                        <h3 className="md:text-[17pt] text-[13pt] font-[700] ">Disclaimer</h3>
                        <Link href="/about" className="text-[11.5pt] md:text-[14pt] ">Terms & Condition</Link>
                        <Link href="/course" className="text-[11.5pt] md:text-[14pt] ">Privacy Policy</Link>
                        <Link href="/university" className="text-[11.5pt] md:text-[14pt] ">Refund Policy</Link>
                    </div>
                </div>
            </div>
            <div className="my-[1em] font-[family-name:var(--font-montserrat)] text-center md:text-[15.5pt] text-[12pt] px-[2em]  ">
                Copyright ©{currentYear}. All rights reserved and maintained by <span style={{color: color.primaryColor}} className="font-[800] ">BackUp.<span style={{color: color.secondaryColor}}>in</span></span>.
            </div>
        </>
    )
}