import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '../Ui/Carousel/EmblaCarousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const IMAGES_WEB = [
    'HomeBG2.jpg',
    'HomeBG3.jpg',
    'HomeBG4.jpg',
    'HomeBG5.jpg',
]
const IMAGES_MOBILE = [
    'HomeBGM1.png',
    'HomeBGM2.png',
    'HomeBGM3.png',
    'HomeBGM4.png',
    'HomeBGM5.jpg',
]

export default function HomePage() {
    return (
        <>
            <div className='font-[family-name:var(--font-montserrat)] md:h-[90dvh] md:block hidden '>
                <EmblaCarousel images={IMAGES_WEB} options={OPTIONS} />
            </div>
            <div className='font-[family-name:var(--font-montserrat)] md:hidden '>
                <EmblaCarousel images={IMAGES_MOBILE} options={OPTIONS}  />
            </div>
        </>
    )
}