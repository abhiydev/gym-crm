import React, { useState } from 'react'
import Image from 'next/image'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    
  return (
    <div>
        <Image src={images[currentIndex]} alt="slider" width={1000} height={1000} />
        <button onClick={handleNext}><FaArrowRight /></button>
        <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}><FaArrowLeft /></button>
    </div>
  )
}

export default ImageSlider