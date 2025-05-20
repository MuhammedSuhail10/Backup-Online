import ButtonUi from "./Button";

type Course = {
    name: string;
    duration: string;
    university: string;
};

export default function CourseCard({data}: {data: Course}) {
    return(
        <div className="border rounded-2xl w-[30em] shadow-md p-6 mt-[2em] hover:shadow-xl transition duration-300">
            <div className="flex justify-between items-center md:h-[5em] ">
                <h2 className="text-[15pt] font-bold mb-2 w-[70%] md:w-[85%] ">{data.name}</h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"> {data.duration} </span>
            </div>
            <div className="mt-1 space-y-2">
                <div className="flex items-center text-grey-600 dark:text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <p><strong>Duration:</strong> {data.duration}</p>
                </div>
                <div className="flex items-center text-grey-600 dark:text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p><strong>University:</strong> {data.university}</p>
                </div>
            </div>
            <div className="mt-6">
                <ButtonUi text="Know More" />
            </div>
        </div>
    )
}