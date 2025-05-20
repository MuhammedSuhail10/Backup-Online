import CourseCard from "../Ui/CourseCard"

export default function CourseData() {
    const courses = [
        {
            id: 1,
            name: "Bachelor of Commerce (B.Com)",
            duration: "3 Years",
            university: "Delhi University"
        },
        {
            id: 2,
            name: "Bachelor of Science (B.Sc) - Computer Science",
            duration: "3 Years",
            university: "Mumbai University"
        },
        {
            id: 3,
            name: "Master of Business Administration (MBA)",
            duration: "2 Years",
            university: "IIM Bangalore"
        },
        {
            id: 4,
            name: "Master of Business Administration (MBA)",
            duration: "2 Years",
            university: "IIM Bangalore"
        },
    ]

    return (
        <div className="md:my-[3em] my-[2.5em] font-[family-name:var(--font-montserrat)]  ">
            <h1 className="text-center font-[600] font-[family-name:var(--font-poppins)] md:text-[32pt] text-[25pt] ">What We Offer</h1>
            <p className="md:text-[15pt] md:mt-[1em] text-gray-600 dark:text-slate-300 mt-[0.5em] md:px-[8em] px-[1.5em] text-[11.5pt] ">At BackUp.<span className="text-teal-300 ">in</span>, we offer top-tier consultation and assistance for individuals navigating challenges such as full-time jobs, age constraints, or academic commitments. Our specialized programs, including CMA and CA coaching, are designed to support your career growth and success.</p>
            <div className="flex flex-wrap gap-x-[10px] md:px-[10em] px-[1.5em] md:mt-[1em] ">
                {courses.map(course => <CourseCard key={course.id} data={course} />)}
            </div>
        </div>
    )
}