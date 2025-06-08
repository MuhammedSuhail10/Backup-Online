import ImageDisplay from "@/helpers/ImageDisplay"

export default function Header() {
    return (
        <div className="fixed inset-0 z-0 relative font-[family-name:var(--font-montserrat)]">
            <ImageDisplay src='/IGNOU.png' className='md:block md:h-[60dvh] h-[50dvh]' alt='Background Image 1' fill={true} />
            <div className="absolute md:px-[10em] px-[1em] inset-0 text-white flex flex-col items-center justify-center backdrop-blur-[3px] md:bg-black/25 bg-black/20 rounded-lg">
                <h1 className="md:text-[28pt] text-[20pt] font-[600] mb-[1em] drop-shadow-lg leading-[27px] ">Indira Gandhi National Open University - Online</h1>
                <p className="md:text-[12.5pt] text-[11.5pt] ">For the present program, we have chosen IGNOU (Indira Gandhi National Open University) as the Institute we enroll our students with for obtaining their degrees. Along with registration with our learning program, the student enrolls with IGNOU as anyone would normally do. The difference here being that we will be supporting the student's learning whilst pursuing their degree from IGNOU.</p>
            </div>
        </div>
    )
}