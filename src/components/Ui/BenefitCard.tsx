type Benefit = {
    title: string;
    description: string;
};

export default function BenefitCard({ data }: { data: Benefit }) {
    return (
        <div className="font-[family-name:var(--font-montserrat)] bg-[#5fa8d3] dark:bg-[#003566] rounded-2xl w-[25em] shadow-md p-6 mt-[2em] hover:shadow-xl transition duration-300" >
            <h2 className="text-[17pt] font-[600] ">{data.title}</h2>
            <p className="text-[11.5pt] mt-[0.5em] text-gray-600 dark:text-slate-300 ">{data.description}</p>
        </div>
    )
}