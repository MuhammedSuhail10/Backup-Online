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
            <Conseltation text="Lets Join Hands For A Better Future" />
            <Footer />
        </>
    )
}