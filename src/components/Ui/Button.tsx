import colors from "@/helpers/color"

export default function ButtonUi({ text, py="py-[0.5em]", px="px-8", inverted=false }: { text: string, py?: string, px?: string, inverted?: bool }) {
    const color = colors()
    return <button style={inverted ? {borderColor: color.secondaryColor, borderWidth: 1, color: color.secondaryColor, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'} :{backgroundColor: color.secondaryColor,  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}} className={`text-white font-semibold ${px} ${py} rounded-lg `}>{text}</button>
}