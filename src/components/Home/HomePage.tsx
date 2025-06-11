import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '../Ui/Carousel/EmblaCarousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const IMAGES_WEB = [
    'HomeBG1.jpg',
    'IGNOU.png',
]
const IMAGES_MOBILE = [
    'HomeBGM1.jpg',
    'IGNOU.png',
]

export default function HomePage() {
    return (
        <>
            <div className='font-[family-name:var(--font-montserrat)] md:h-[90dvh] md:block hidden '>
                <EmblaCarousel images={IMAGES_WEB} options={OPTIONS} />
            </div>
            <div className='font-[family-name:var(--font-montserrat)] h-[75dvh] md:hidden '>
                <EmblaCarousel images={IMAGES_MOBILE} options={OPTIONS}  />
            </div>
        </>
    )
}