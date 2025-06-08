import colors from "@/helpers/color"

export default function ButtonUi({ text, py="py-[0.5em]", px="px-8" }: { text: string, py?: string, px?: string }) {
    const color = colors()
    return <button style={{backgroundColor: color.secondaryColor,  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}} className={`text-white font-semibold ${px} ${py} rounded-lg `}>{text}</button>
}