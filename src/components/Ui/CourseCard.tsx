import ButtonUi from "./Button";
import colors from "@/helpers/color";
import Link from 'next/link';

type Course = {
    name: string;
    duration: string;
    brochure: string;
};

export default function CourseCard({data}: {data: Course}) {
    const color = colors();
    const message = `Hi there! I’d love to know more about the ${data.name} course from IGNOU. Please send me the admission process, fee structure, and other important information. Looking forward to joining soon!`
    const encodedMessage = encodeURIComponent(message);
    return(
        <div style={{borderColor: color.tertiaryColor,  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}} className="border rounded-2xl w-[30em] xl:w-[30em] 2xl:w-[35em] shadow-md p-6 mt-[2em] hover:shadow-xl transition duration-300">
            <div className="flex justify-between items-center md:h-[4em] ">
                <h2 className="text-[15pt] font-bold mb-2 w-[70%] md:w-[80%] ">{data.name}</h2>
                <span style={{backgroundColor: color.tertiaryColor, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}} className="text-white text-xs font-medium px-2.5 py-0.5 rounded-full"> {data.duration} </span>
            </div>
            <div style={{color: color.tertiaryColor,}} className="mt-1 space-y-2">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <p><strong>Duration:</strong> {data.duration}</p>
                </div>
            </div>
            <div className="mt-6 flex justify-between">
                <a href={data.brochure} download>
                    <ButtonUi text="Brochure" py="py-[0.5em] " px="md:px-8 px-3" />
                </a>
                <Link href={`https://wa.me/919497428107?text=${encodedMessage}`}>
                    <ButtonUi text="Know More" py="py-[0.5em] " px="md:px-8 px-3" inverted />
                </Link>
            </div>
        </div>
    )
}