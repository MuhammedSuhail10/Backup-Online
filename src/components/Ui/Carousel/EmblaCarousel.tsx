'use client'

import React, { useRef } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './EmblaCarouselAutoplay'
import './embla.css'
import ImageDisplay from '@/helpers/ImageDisplay'

type PropType = {
  images: string[],
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { images, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ])

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi)

  return (
    <div className="embla md:h-[90dvh] ">
      <div className="embla__viewport md:h-[90dvh]" ref={emblaRef}>
        <div className="embla__container md:h-[90dvh]">
          {images.map((index) => (
            <div className="embla__slide md:h-[90dvh] " key={index}>
              <div className="embla__slide__number md:h-[90dvh]">
                <img src={index} className="w-[100dvw] md:h-[90dvh] h-auto " alt="Bg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel