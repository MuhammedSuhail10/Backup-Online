import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Conseltation from "@/components/Ui/Conseltation";
import UniversityData from "@/components/University/Data";
import Header from "@/components/University/Header";

export default function Page() {
    return (
        <>
            <Navbar />
            <Header />
            <UniversityData />
            <Conseltation/>
            <Footer />
        </>
    )
}