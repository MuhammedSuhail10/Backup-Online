type Benefit = {
    title: string;
    description: string;
};

export default function BenefitCard({ data }: { data: Benefit }) {
    return (
        <div className="font-[family-name:var(--font-montserrat)] bg-[#5fa8d3] dark:bg-[#003566] rounded-2xl md:w-[22.5em] shadow-md p-6 md:mt-[2em] mt-[1em] hover:shadow-xl transition duration-300" >
            <h2 className="text-[17pt] font-[600] ">{data.title}</h2>
            <p className="text-[11.5pt] mt-[0.5em] text-gray-600 dark:text-slate-300 ">{data.description}</p>
        </div>
    )
}