import { useEffect, useState } from 'react'

import Image0 from '@assets/sliders/0.png'
import Image1 from '@assets/sliders/1.png'
import Image2 from '@assets/sliders/2.png'
import Image3 from '@assets/sliders/3.png'
import Image5 from '@assets/sliders/5.png'
import Image6 from '@assets/sliders/6.png'
import Image7 from '@assets/sliders/7.png'

import './styles/slider.css'
import Utils from 'src/helpers/utils'

interface SliderImage {
  id: number
  alt: string
  img: string
  selected: boolean
}

export function Slider() {
  const CHANGE_IMAGE_SECONDS = 10
  let currentImageIndex = 0

  const [images, setImages] = useState<SliderImage[]>([
    {
      id: 1,
      img: Image0,
      alt: 'Katarina Battle Academy',
      selected: true
    },
    {
      id: 2,
      img: Image1,
      alt: 'Katarina Battle Academy 2',
      selected: false
    },
    {
      id: 3,
      img: Image2,
      alt: '',
      selected: false
    },
    {
      id: 4,
      img: Image3,
      alt: 'Team Gallant',
      selected: false
    },
    {
      id: 5,
      img: Image5,
      alt: 'Lux Thief Arcane',
      selected: false
    },
    {
      id: 6,
      img: Image6,
      alt: 'Ezreal Battle Academy',
      selected: false
    },
    {
      id: 7,
      img: Image7,
      alt: 'Katarina Death Lotus',
      selected: false
    }
  ])


  function slideshow(msChangeTime: number = 1) {
    const random = Utils.dontRepeatImageIndex(currentImageIndex, 7)
    currentImageIndex = random

    setImages(images.map(image => {
      image.selected = false

      if (image.id == random) image.selected = true

      return image
    }))

    setTimeout(slideshow.bind(null, msChangeTime), msChangeTime * 1000)
  }

  useEffect(() => {
    slideshow(CHANGE_IMAGE_SECONDS)
  }, [])

  return (
    <section>
      {images.map(image => (
        <img key={image.id} className={image.selected ? 'selected' : ''} src={image.img} alt={image.alt} />
      ))}
    </section>
  )
}
