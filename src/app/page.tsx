import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/components/Home/HomePage";
import Courses from "@/components/Home/Courses";
import Conseltation from "@/components/Ui/Conseltation";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Courses />
      <Conseltation />
      <Footer />
    </>
  );
}