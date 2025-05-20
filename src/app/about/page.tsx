import Header from "@/components/About/Header";
import Section from "@/components/About/Section";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Conseltation from "@/components/Ui/Conseltation";

export default function Page() {
    return (
        <>
            <Navbar />
            <Header />
            <Section />
            <Conseltation text="Lets Join Hands For A Better Future" bg="bg-[#5fa8d3] dark:bg-[#003566]" />
            <Footer bg="dark:bg-[#343a40] bg-[#dee2e6]" />
        </>
    )
}