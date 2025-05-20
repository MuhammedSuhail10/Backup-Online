import Link from "next/link";

export default function Footer({ bg = "bg-[#5fa8d3] dark:bg-[#003566]" }: { bg?: string }) {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className={`font-[family-name:var(--font-montserrat)] ${bg} md:px-[15em] px-[1em] md:py-[4em] py-[2em] flex justify-between `}>
                <Link href="/" className="text-xl flex flex-col md:flex-row items-center justify-center">
                    <img
                        src="/IconImage.png"
                        alt="Icon"
                        className="h-[2em] md:h-[3.5em] max-w-lg  object-contain"
                    />
                    <img
                        src="/Name.png"
                        alt="Icon"
                        className="md:h-[4em] h-[2em] max-w-lg  object-contain"
                    />
                </Link>

                {/* Quick links */}
                <div className="flex flex-col gap-y-[0.5em] ">
                    <h3 className="md:text-[15pt] text-[12.5pt] font-[600] ">Quick Links</h3>
                    <Link href="/course" className="text-[11pt] md:text-[12.5pt] ">Courses</Link>
                    <Link href="/university" className="text-[11pt] md:text-[12.5pt] ">IGNOU</Link>
                    <Link href="/about" className="text-[11pt] md:text-[12.5pt] ">About Us</Link>
                </div>

                {/* Quick links */}
                <div className="flex flex-col gap-y-[0.5em] ">
                    <h3 className="md:text-[15pt] text-[12.5pt] font-[600] ">Disclaimer</h3>
                    <Link href="/about" className="text-[11pt] md:text-[12.5pt] ">Terms & Condition</Link>
                    <Link href="/course" className="text-[11pt] md:text-[12.5pt] ">Privacy Policy</Link>
                    <Link href="/university" className="text-[11pt] md:text-[12.5pt] ">Refund Policy</Link>
                </div>
            </div>
            <div className="my-[1em] font-[family-name:var(--font-montserrat)] text-center md:text-[15pt] text-[11pt] px-[2em]  ">
                Copyright ©{currentYear}. All rights reserved by BackUp.<span className="text-teal-300 ">in</span>.
            </div>
        </>
    )
}