import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Conseltation from "@/components/Ui/Conseltation";
import UniversityData from "@/components/University/Data";

export default function Page() {
    return (
        <>
            <Navbar />
            <UniversityData />
            <Conseltation/>
            <Footer />
        </>
    )
}