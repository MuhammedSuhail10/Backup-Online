import CourseCard from "../Ui/CourseCard"

export default function CourseData() {
    const courses = [
        {
            id: 1,
            name: "Bachelor of Commerce (B.Com)",
            duration: "3 Years",
            brochure: "/BCOM_BROCHURE.pdf"
        },
        {
            id: 2,
            name: "Bachelor of Business Administration (BBA)",
            duration: "3 Years",
            brochure: '/BBA_BROCHURE.pdf'
        },
        {
            id: 3,
            name: "Master of Business Administration (MBA)",
            duration: "2 Years",
            brochure: '/MBA_BROCHURE.pdf'
        },
        {
            id: 4,
            name: "Master of Commerce (M.Com)",
            duration: "2 Years",
            brochure: '/MCOM_BROCHURE.pdf'
        },
    ]

    return (
        <div className="md:my-[3em] my-[2em] font-[family-name:var(--font-montserrat)]  ">
            <h1 className="md:text-[28pt] text-[20pt] font-[600] text-center text-black drop-shadow-lg">What We Offer</h1>
            <p className="md:text-[15pt] md:mt-[1em] text-gray-600 mt-[0.5em] md:px-[8em] px-[1.5em] text-[12pt] ">
                BackUp.<span className="text-teal-300 ">in</span>, 
                is a platform designed to support CA, CMA, CS, and ACCA aspirants in pursuing their professional courses with a Degree or Master's  as a backup.  This platform is created specifically for CA, CMA, CS, and ACCA students to help them avoid getting lost in the journey of becoming professionals and to prevent confusion while building their careers. Various UG and PG programs are offered below.
            </p>
            <div className="flex flex-wrap gap-x-[10px] 2xl:px-[10em] justify-center xl:px-[6em] px-[1.5em] md:mt-[1em] ">
                {courses.map(course => <CourseCard key={course.id} data={course} />)}
            </div>
        </div>
    )
}