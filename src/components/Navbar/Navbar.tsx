import ButtonUi from "../Ui/Button";
import DrawerUi from "../Ui/Drawer";

export default function Navbar() {
    return (
        <div className="font-[family-name:var(--font-montserrat)] md:px-[10em] h-[10vh] px-[10px] flex justify-between items-center bg-[#5fa8d3] dark:bg-[#003566]">
            <h1 className="text-xl">Backup Online</h1>

            {/* Links */}
            <div className="hidden md:flex gap-[5em] items-center ">
                <a href="">Courses</a>
                <a href="">Universities</a>
                <a href="">About Us</a>
                <ButtonUi text="Enquire" />
            </div>

            {/* Drawer */}
            <div className="md:hidden">
                <DrawerUi />
            </div>
        </div>
    )
}