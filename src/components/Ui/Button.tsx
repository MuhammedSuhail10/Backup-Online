export default function ButtonUi({ text, py="py-[0.5em]" }: { text: string, py?: string }) {
    return <button className={`bg-blue-900 dark:bg-blue-400 text-white dark:text-black font-semibold px-8 ${py} rounded-lg `}>{text}</button>
}