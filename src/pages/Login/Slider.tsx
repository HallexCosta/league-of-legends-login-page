import { useEffect, useState } from 'react'

import Image0 from '@assets/sliders/0.png'
import Image1 from '@assets/sliders/1.png'
import Image2 from '@assets/sliders/2.png'
import Image3 from '@assets/sliders/3.png'
import Image5 from '@assets/sliders/5.png'
import Image6 from '@assets/sliders/6.png'
import Image7 from '@assets/sliders/7.png'

import Utils from '@helpers/utils'
import './styles/slider.css'

interface SliderImage {
  id: number
  alt: string
  img: string
  selected: boolean
}

export function Slider() {
  const CHANGE_IMAGE_SECONDS = 10
  const INITIAL_IMAGE = 1
  const IMAGES_AMOUNT = 7
  let currentImageId: number

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

  function slideshow(initialImage?: number) {
    const random = initialImage ?? Utils.dontRepeatImageId(currentImageId, IMAGES_AMOUNT)
    currentImageId = random
    console.log('random', random)

    setImages(images.map(image => {
      image.selected = false

      if (image.id == currentImageId) image.selected = true

      return image
    }))

    return setTimeout(slideshow, CHANGE_IMAGE_SECONDS * 1000)
  }

  useEffect(() => {
    const slideshowId = slideshow(INITIAL_IMAGE)
    return clearTimeout.bind(null, slideshowId)
  }, [])

  return (
    <section>
      {images.map(image => (
        <img key={image.id} className={image.selected ? 'selected' : ''} src={image.img} alt={image.alt} />
      ))}
    </section>
  )
}
