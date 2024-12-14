
// app/components/Gallery.jsx
import Image from 'next/image'
import {
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
} from '../../public/index'

const Gallery = ({ images }) => {
  return (
    <div className="columns-1 md:columns-3 lg:columns-4 gap-4 p-4 space-y-4">
      {images.map((image, index) => (
        <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative">
            <Image
              src={image.url}
              alt={image.title || 'Gallery image'}
              width={image.width || 300}
              height={image.height || 400}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                {image.description && (
                  <p className="text-white text-sm">{image.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// app/page.jsx
export default function GalleryPage() {
  const images = [
    {
      url: Img1,
      title: 'Image 1',
      description: 'Description 1',
      width: 300,
      height: 400
    },
    {
      url: Img2,
      title: 'Image 1',
      description: 'Description 1',
      width: 300,
      height: 400
    },
    {
      url: Img3,
      title: 'Image 1',
      description: 'Description 1',
      width: 300,
      height: 400
    },
    {
      url: Img4,
      title: 'Image 1',
      description: 'Description 1',
      width: 300,
      height: 400
    },
    {
      url: Img5,
      title: 'Image 1',
      description: 'Description 1',
      width: 300,
      height: 400
    },
    {
      url: Img6,
      title: 'Image 1',
      description: 'Description 1',
      width: 300,
      height: 400
    },
    {
      url: Img7,
      title: 'Image 1',
      description: 'Description 1',
      width: 300,
      height: 400
    },
    // Add more images as needed
  ]

  return (
    <main className="container mx-auto">
      <Gallery images={images} />
    </main>
  )
}
