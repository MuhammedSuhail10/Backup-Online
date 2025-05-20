import BenefitCard from "../Ui/BenefitCard";
import ButtonUi from "../Ui/Button";
import CourseCard from "../Ui/CourseCard";

export default function UniversityData() {

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
    ]

    const benefits = [
        {
            id: 1,
            title: "Learning Management System",
            description: "IGNOU University supports LMS and offers a flexible education environment. Students can access materials, submit assignments, and communicate with faculty from anywhere."
        },
        {
            id: 2,
            title: "Interactive Virtual Classrooms",
            description: "The university offers interactive online classrooms that allow students to interact with faculty members and classmates in real time. These online classrooms offer tools for easy participation in discussions, questions, and project collaboration."
        },
        {
            id: 3,
            title: "E-Learning Resources",
            description: "Its E-learning Resources include structured course content, an LMS for management, assessments, multimedia, live classes, personalised learning, communication tools, and support services."
        },
        {
            id: 4,
            title: "24/7 Dedicated Support System",
            description: "The university offers a 24/7 dedicated support system to help students with questions or concerns. This support system includes email, phone, and live chat support, ensuring that students receive timely assistance whenever needed."
        },
        {
            id: 5,
            title: "Online Assessments and Exams",
            description: "The university conducts online assessments and exams to measure student progress and evaluate their understanding of the material. These challenging assessments provide valuable feedback on performance."
        },
        {
            id: 6,
            title: "Experienced Faculty",
            description: "The university provides faculty support and assistance to students, making it easier for them to learn and succeed. Teachers bring real-world experiences into the classroom, helping students understand how their lessons apply in everyday life."
        }
    ];

    const exams = [
        {
            id: 1,
            title: "Flexible Scheduling",
            description: "Students can choose their exam dates from various options. This allows them to plan their study schedules according to their convenience, helping them balance their personal, professional, and academic commitments."
        },
        {
            id: 2,
            title: "Online Proctored Exams",
            description: "To maintain the accuracy and authenticity of the examination process, IGNOU Online University uses advanced online proctoring systems. These systems monitor students during exams through their webcams and microphones."
        },
        {
            id: 3,
            title: "Secure Examination Platform",
            description: "The exams are conducted on a secure online platform that supports various assessments, including multiple-choice questions, descriptive questions, and practical assignments. It is user-friendly and accessible on demand."
        },
        {
            id: 4,
            title: "Real-time Support",
            description: "Students can access real-time technical support throughout the examinations to address issues. This ensures that technical difficulties do not cause problems in the examination process."
        },
        {
            id: 5,
            title: "Comprehensive Evaluation",
            description: "IGNOU Online's evaluation process is very transparent. Students receive quarterly feedback on their performance, which helps them recognise their strengths and areas for improvement."
        },
        {
            id: 6,
            title: "Continuous Assessment",
            description: "The University uses continuous assessment through assignments, quizzes, and projects alongside final exams. This approach keeps students consistently engaged and helps them apply their learning practically."
        }
    ];


    return (
        <div className="font-[family-name:var(--font-montserrat)] md:px-[15em] md:my-[4em] px-[0.5em] my-[1.5em] ">
            <h1 className="md:text-[30pt] text-[21pt] my-[0.5em] font-[600] leading-[27px] ">Indira Gandhi National Open University - Online</h1>
            <p className="md:text-[12.5pt] text-[11.5pt] text-gray-600 dark:text-slate-300 ">For the present program, we have chosen IGNOU (Indira Gandhi National Open University) as the Institute we enroll our students with for obtaining their degrees. Along with registration with our learning program, the student enrolls with IGNOU as anyone would normally do. The difference here being that we will be supporting the student's learning whilst pursuing their degree from IGNOU.</p>

            {/* Brochure */}
            <div className="md:my-[2em] my-[1em] ">
                <h1 className="md:text-[25pt] text-[18pt]">Brochure</h1>
                <ButtonUi text="Download Brochure" py="md:py-[0.8em] py-[0.7em] " />
            </div>

            {/* About */}
            <div className="md:my-[2em] my-[1em] ">
                <h1 className="md:text-[25pt] text-[18pt] ">About IGNOU</h1>
                <p className="md:text-[11.5pt] text-[11.5pt] text-gray-600 dark:text-slate-300 ">
                    The Indira Gandhi National Open University (IGNOU), established by an Act of Parliament in 1985, has continuously striven to build an inclusive knowledge society through inclusive education. It has tried to increase the Gross Enrollment Ratio (GER) by offering high-quality teaching through the Open and Distance Learning (ODL) mode.
                    The University began by offering two academic programmes in 1987, i.e., Diploma in Management and Diploma in Distance Education, with a strength of 4,528 students.
                    Today, it serves the educational aspirations of over 3 million students in India and other countries through 21 Schools of Studies and a network of 67 Regional Centres, around 2,000 Learner Support Centres and 20 overseas institutions. The University offers about 200 certificate, diploma, degree and doctoral programmes, with a strength of nearly 250 faculty members and 230 academic staff at the headquarters and regional centres and over 35,000 academic counsellors from conventional institutions of higher learning, professional organisations, and industry among others.
                    The University is committed to quality in teaching, research, training and extension activities, and acts as a national resource centre for expertise and infrastructure in the ODL system. The University has established the National Centre for Disability Studies and National Centre for Innovation in Distance Education, to focus on specific learner groups and enrich the distance learning system.
                </p>
            </div>

            {/* Benefits */}
            <div className="md:my-[2em] my-[1em] ">
                <h1 className="md:text-[25pt] text-[18pt] ">Benefits of Studying at IGNOU</h1>
                <p className="md:text-[11.5pt] text-[11.5pt] text-gray-600 dark:text-slate-300 ">With expert faculty, advanced technology, and a global network, IGNOU University empowers students to achieve academic and career goals without compromising work or personal commitments. The following are the benefits of pursuing online education from this university:-</p>
                <div className="flex flex-wrap gap-x-[2em] ">
                    {benefits.map(benefit => <BenefitCard key={benefit.id} data={benefit} />)}
                </div>
            </div>

            {/* Courses */}
            <div className="md:my-[2em] my-[1em] ">
                <h1 className="md:text-[25pt] text-[18pt] ">Courses at IGNOU</h1>
                <div className="flex flex-wrap gap-x-[2em] items-center ">
                    {courses.map(course => <CourseCard key={course.id} data={course} />)}
                    <div className="mt-[1em] md:block hidden justify-center  ">
                        <ButtonUi text="View More" py="md:py-[0.8em] py-[0.7em] " />
                    </div>
                </div>
                <div className="mt-[1em] flex md:hidden justify-center ">
                    <ButtonUi text="View More" py="md:py-[0.8em] py-[0.7em] " />
                </div>
            </div>

            {/* Exam */}
            <div className="md:my-[2em] my-[1em] ">
                <h1 className="md:text-[25pt] text-[18pt] ">Exam Information</h1>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-slate-300 my-[0.5em] ">
                    {exams.map((exam) => (
                        <li key={exam.id}>
                            <span className="font-semibold">{exam.title}:</span> {exam.description}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Placements */}
            <div className="md:my-[2em] my-[1em] ">
                <h1 className="md:text-[25pt] text-[18pt] ">Top Placements</h1>
            </div>
        </div>
    )
}