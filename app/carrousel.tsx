'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export default function CarrouselComponent() {
  return (
    <Carousel className="w-full max-w-lg" plugins={[Autoplay({ delay: 1000, stopOnInteraction: true })]}> 
    <CarouselContent>
      {['/bo-g-1.png', '/bo-g-2.png', '/bo-g-3.png', '/bo-g-4.png'].map((src, index) => (
        <CarouselItem key={index}  >
          <div className="p-1">
            <Image
              src={src}
              alt={`Imagem do kit de atividades ${index + 1}`}
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="hidden sm:flex" />
    <CarouselNext className="hidden sm:flex" />
  </Carousel>
  )
}
