import colors from "@/helpers/color"

type Benefit = {
    title: string;
    description: string;
};

export default function BenefitCard({ data }: { data: Benefit }) {
    const color = colors()
    return (
        <div style={{backgroundColor: color.tertiaryColor}} className="font-[family-name:var(--font-montserrat)] text-white rounded-2xl md:w-[22.5em] shadow-md p-6 md:mt-[2em] mt-[1em] hover:shadow-xl transition duration-300" >
            <h2 className="text-[16pt] font-[600] ">{data.title}</h2>
            <p className="text-[11.5pt] mt-[0.5em] text-slate-300 ">{data.description}</p>
        </div>
    )
}