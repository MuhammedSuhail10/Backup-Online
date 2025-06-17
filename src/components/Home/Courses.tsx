import CourseCard from "../Ui/CourseCard"

export default function Courses() {

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
            name: "Master of Commerce (M.Com)",
            duration: "2 Years",
            brochure: '/MCOM_BROCHURE.pdf'
        },
        {
            id: 4,
            name: "Master of Business Administration (MBA)",
            duration: "2 Years",
            brochure: '/MBA_BROCHURE.pdf'
        },
    ]

    return (
        <div className="md:my-[2.5em] my-[1em] font-[family-name:var(--font-montserrat)]  ">
            <h1 className="md:text-[28pt] text-[20pt] font-[600] text-black drop-shadow-lg text-center">Our Courses</h1>
            <div className="flex flex-wrap justify-between 2xl:px-[10em] xl:px-[6em] px-[1.5em] md:mt-[1em] ">
                {courses.map(course => <CourseCard key={course.id} data={course} />)}
            </div>
        </div>
    )
}