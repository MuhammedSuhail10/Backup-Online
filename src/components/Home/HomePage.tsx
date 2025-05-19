import ButtonUi from '../Ui/Button';

export default function HomePage() {
    return (
        <div className='font-[family-name:var(--font-montserrat)] md:h-[90vh] h-[70vh] bg-gradient-to-br dark:from-gray-800 dark:to-indigo-900 to-blue-900 relative overflow-hidden'>
            <div className='h-[14vh]'></div>
            <div className="absolute top-0 left-0 w-full md:h-[75vh] opacity-30 z-0">
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-overlay filter blur-3xl"></div>
            </div>
            <div className='flex justify-between md:px-[12em] px-[1em] md:h-[75vh] h-[13vh] '>
                <div className='md:h-[60vh] flex flex-col justify-center z-1 '>
                    <h1 className='text-4xl md:text-[45pt] font-semibold dark:text-white leading-tight'>A Backup Platform for Individuals</h1>
                    <h2 className='text-xl md:text-2xl dark:text-[#d3d3d3] text-grey-800 font-[family-name:var(--font-poppins)] '>Persue professional courses with our guidance</h2>
                    <div className='mt-[1em] '>
                        <ButtonUi text='Consult Us' py='py-[1em]' />
                    </div>
                </div>
                <div className="lg:w-1/2 w-[17em] md:relative absolute bottom-0 right-0 z-0 ">
                    <img 
                        src="/PersonImage.png"
                        alt="Professional person" 
                        className="w-full max-w-lg  object-contain" 
                    />
                </div>
            </div>
        </div>
    )
}