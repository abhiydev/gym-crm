import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

interface CoachesCardProps {
    coachesProps: {
        imageUrl: string
        imageAlt: string
        name: string
        description: string
    }[]
}

const CoachesCard: React.FC<CoachesCardProps> = ({ coachesProps }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsToShow, setItemsToShow] = useState(1); // Default to 1 for mobile

    useEffect(() => {
        const updateItemsToShow = () => {
            setItemsToShow(window.innerWidth >= 768 ? 4 : 1);
        };

        updateItemsToShow(); // Set initial value
        window.addEventListener('resize', updateItemsToShow); // Update on resize

        return () => {
            window.removeEventListener('resize', updateItemsToShow); // Cleanup listener
        };
    }, []);

    const totalItems = Math.ceil(coachesProps.length / itemsToShow);

    const nextCoach = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }

    const prevCoach = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    }

    return (
        <div className='flex items-center justify-between max-w-[90%] mx-auto py-4'>
            <button onClick={prevCoach} className='p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 transition duration-200'>
                <FaAngleLeft />
            </button>
            <div className='flex overflow-hidden w-full'>
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`flex ${itemsToShow > 1 ? 'gap-4' : ''}`}
                    >
                        {coachesProps.slice(currentIndex * itemsToShow, currentIndex * itemsToShow + itemsToShow).map((coach, index) => (
                            <div key={index} className='flex flex-col text-start bg-gray-800 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105'>
                                <AspectRatio ratio={1 / 1} className='w-full'>
                                    <Image src={coach.imageUrl} alt={coach.imageAlt} fill className='object-cover rounded-lg' />
                                </AspectRatio>
                                <h3 className='text-lg font-bold mt-2'>{coach.name}</h3>
                                <p className='text-sm text-gray-300'>{coach.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <button onClick={nextCoach} className='p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 transition duration-200'>
                <FaAngleRight />
            </button>
        </div>
    )
}

export default CoachesCard