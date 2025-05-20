'use client'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

export default function Conseltation() {
    return (
        <div className="md:px-[3em] font-[family-name:var(--font-montserrat)] mb-[1em] ">
            <div className="dark:bg-[#343a40] bg-[#dee2e6] md:h-[30dvh] h-[35dvh] rounded-xl flex md:flex-row flex-col md:items-center justify-center md:px-[8em] px-[1em] relative  ">
                <div className="md:w-2/3">
                    <h3 className="md:text-[26pt] text-[13pt] font-[600] ">Schedule a One to One Section</h3>
                    <p className="text-[12pt] hidden md:block text-gray-600 dark:text-slate-300 mt-2">Ready to take your progress to the next level? Book a personalized one-to-one session with our expert mentors and get tailored guidance, real-time feedback, and all the support you need to succeed—on your terms.</p>
                    <p className="text-[10pt] md:hidden text-gray-600 dark:text-slate-300 mt-2">Ready to take your progress to the next level? Book a personalized one-to-one session with our expert mentors.</p>
                </div>
                <div className="absolute h-[35dvh] w-[4px] dark:bg-white bg-black md:block hidden"
                    style={{
                        right: '39%',
                        top: '-10%',
                        transform: 'rotate(-12deg)',
                        transformOrigin: 'top'
                    }}>
                </div>
                <div className="md:w-1/3 flex flex-col md:mt-0 mt-[1.5em] items-center font-[family-name:var(--font-poppins)]">
                    <a href="" className='bg-[#457b9d] text-[13pt] text-[#fff] md:w-[60%] w-[100%]  flex items-center gap-[0.3em] justify-center h-[3em] rounded-[20px] '>
                        <PhoneInTalkOutlinedIcon fontSize='small' />
                        Talk To An Expert
                    </a>
                    <a href="" className='text-[#457b9d] mt-[0.5em] text-[13pt] bg-[#fff] md:w-[60%] w-[100%] flex items-center gap-[0.3em] justify-center h-[3em] rounded-[20px] '>
                        <WhatsAppIcon fontSize='small' />
                        Chat To An Expert
                    </a>
                </div>
            </div>
        </div>
    )
}