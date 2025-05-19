export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <div className="font-[family-name:var(--font-montserrat)] my-[2em] text-center ">Copyright ©{currentYear}. All rights reserved by Backup Online.</div>
    )
}