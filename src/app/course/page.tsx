import CourseData from "@/components/Course/Data";
import CourseReason from "@/components/Course/Reason";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
    return (
        <>
            <Navbar />
            <CourseData />
            <CourseReason />
            <Footer />
        </>
    )
}