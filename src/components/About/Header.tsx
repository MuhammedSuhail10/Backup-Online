export default function Header() {
    return (
        <div className="fixed inset-0 z-0 relative font-[family-name:var(--font-montserrat)]">
            <img
                src="/bgImage.jpeg"
                alt="Background"
                className="w-full md:h-[50dvh] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px] md:bg-black/20 bg-black/10">
                <h1 className="md:text-[32pt] text-[25pt] font-[600] text-white drop-shadow-xl">About Us</h1>
            </div>
        </div>
    )
}