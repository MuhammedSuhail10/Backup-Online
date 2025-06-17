import BenefitCard from "../Ui/BenefitCard";
import ButtonUi from "../Ui/Button";
import CourseCard from "../Ui/CourseCard";

export default function UniversityData() {

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

    return (
            <div className="font-[family-name:var(--font-montserrat)] 2xl:px-[15em] xl:px-[8em] px-[0.5em] my-[1.5em] ">

                {/* About */}
                <div className="my-[1.5em] ">
                    <h1 className="md:text-[25pt] text-[18pt] font-[700] ">About IGNOU</h1>
                    <p className="md:text-[13pt] text-[11.5pt] text-gray-600 ">
                        Indira Gandhi National Open University (IGNOU), established in 1985 by an Act of Parliament, revolutionized higher education in India by pioneering the open and distance learning model on an unprecedented scale. As the world’s largest open university, IGNOU has enrolled over 3 million learners, extending educational opportunities beyond the limitations of traditional classroom settings to reach remote, rural, marginalized, and underserved populations. Its founding vision was to democratize education by ensuring that access to quality higher education is not constrained by socioeconomic status, geographic location, or prior academic background. IGNOU offers an extensive and diverse portfolio of more than 300 programs, spanning certificates, diplomas, undergraduate, postgraduate, and doctoral degrees in fields such as arts, commerce, science, management, education, health sciences, agriculture, law, and information technology. The university’s multi-modal learning approach integrates self-instructional printed materials, radio and television broadcasts, digital content via platforms like SWAYAM, virtual classrooms, and a robust Learning Management System (LMS), enabling learners to engage with course material flexibly and effectively.IGNOU’s academic credibility is reinforced by its ‘A++’ grade accreditation from the National Assessment and Accreditation Council (NAAC), recognition by the University Grants Commission (UGC), and its top ranking among open universities in the 2024 National Institutional Ranking Framework (NIRF). The university uniquely supports professional students pursuing rigorous certifications such as Chartered Accountancy (CA), Cost and Management Accountancy (CMA), Company Secretary (CS), and ACCA, offering degree programs with credit exemptions for cleared professional papers. This synergy allows students to simultaneously build academic credentials while advancing in their professional courses, thereby enhancing employability and career prospects. IGNOU’s proactive partnerships with professional bodies like ICAI, ICSI, and ICMAI further validate its role as a bridge between vocational expertise and academic recognition. Student support at IGNOU is comprehensive and learner-focused, with over 67 regional centers and thousands of study centers nationwide providing academic counseling, printed and digital learning resources, online tutoring, and flexible examination schedules held biannually. This extensive support infrastructure ensures inclusivity for working professionals, homemakers, differently-abled learners, and those in remote or economically challenged areas. IGNOU actively integrates emerging technologies such as mobile learning apps, virtual labs, AI-enabled personalized learning tools, and assistive technologies to enhance accessibility and engagement. Its commitment to continuous innovation is evident in its efforts to incorporate blended learning models and interactive multimedia content to cater to diverse learning styles. Beyond education delivery, IGNOU is a hub of research and development in distance education methodologies, lifelong learning, and educational policy. It plays an instrumental role in shaping national education strategies and collaborates with international institutions through numerous Memorandums of Understanding (MoUs) and memberships in global education consortia. These alliances promote cross-border academic exchange and facilitate the global recognition of IGNOU qualifications, supporting student mobility and international career opportunities. IGNOU’s impact transcends academics; it fosters social equity by empowering disadvantaged groups, contributes to national skill development missions, and supports government initiatives aimed at literacy, vocational training, and employment generation. Its alumni have made significant contributions across sectors including government services, corporate enterprises, academia, non-governmental organizations, and entrepreneurship, demonstrating the university’s vital role in nation-building. Looking ahead, IGNOU is committed to expanding its program offerings, harnessing cutting-edge technologies such as artificial intelligence, virtual reality, and data analytics to enrich the learning experience, and further strengthening its global partnerships. Through its unwavering dedication to inclusive, flexible, and quality education, IGNOU continues to be a transformative force—empowering millions to achieve academic excellence, professional success, and lifelong personal growth, thus shaping the future of education in India and the world.
                    </p>
                </div>

                {/* Benefits */}
                <div className="my-[1.5em] ">
                    <h1 className="md:text-[25pt] text-[18pt] font-[700] ">Benefits of Studying at IGNOU</h1>
                    <p className="md:text-[13pt] text-[11.5pt] text-gray-600 ">With expert faculty, advanced technology, and a global network, IGNOU University empowers students to achieve academic and career goals without compromising work or personal commitments. The following are the benefits of pursuing online education from this university:-</p>
                    <div className="flex flex-wrap gap-x-[2em] ">
                        {benefits.map(benefit => <BenefitCard key={benefit.id} data={benefit} />)}
                    </div>
                </div>

            </div>
    )
}