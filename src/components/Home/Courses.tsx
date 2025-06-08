import CourseCard from "../Ui/CourseCard"

export default function Courses() {

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
        <div className="md:my-[2.5em] my-[1.5em] font-[family-name:var(--font-montserrat)]  ">
            <h1 className="md:text-[28pt] text-[20pt] font-[600] text-black drop-shadow-lg text-center">Our Courses</h1>
            <div className="flex flex-wrap justify-between md:px-[10em] px-[1.5em] md:mt-[1em] ">
                {courses.map(course => <CourseCard key={course.id} data={course} />)}
            </div>
        </div>
    )
}