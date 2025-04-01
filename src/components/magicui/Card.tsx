import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
    cards: {
        imageUrl: string;
        imageAlt: string;
        title: string;
        description: string;
        lastUpdated: string;
    }[];
}

const Card = ({ cards }: CardProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState<typeof cards>([]);
    const [cardsToShow, setCardsToShow] = useState(3);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Update number of cards to show based on screen width
    useEffect(() => {
        const updateCardsToShow = () => {
            setCardsToShow(window.innerWidth < 640 ? 1 : 3);
        };
        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);
        return () => window.removeEventListener("resize", updateCardsToShow);
    }, []);

    // Update visible cards with wrapping logic
    const updateVisibleCards = () => {
        const visible = [];
        for (let i = 0; i < cardsToShow; i++) {
            visible.push(cards[(currentIndex + i) % cards.length]);
        }
        setVisibleCards(visible);
    };

    useEffect(() => {
        updateVisibleCards();
    }, [currentIndex, cardsToShow, cards]);

    // Timer reset for auto-advance
    const resetTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 5000);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        resetTimer();
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        resetTimer();
    };

    // Framer Motion variants for left-to-right transition
    const cardVariants = {
        initial: (direction: number) => ({ opacity: 0, x: direction > 0 ? 300 : -300 }),
        animate: { opacity: 1, x: 0 },
        exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -300 : 300 }),
    };

    return (
        <div className="relative w-full overflow-hidden flex items-center justify-center">
            <button
                onClick={handlePrev}
                className="bg-black text-white p-2 rounded-full hover:bg-neutral-800 transition"
            >
                <FaAngleLeft />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                <AnimatePresence mode="wait">
                    {visibleCards.map((card, index) => (
                        <motion.div
                            key={card.title + index}
                            custom={direction}
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                href={`/services/${card.title.toLowerCase().replace(/\s+/g, "-")}`}
                                className="group flex flex-col w-full max-w-96 bg-neutral-900/50 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        src={card.imageUrl}
                                        alt={card.imageAlt}
                                        width={400}
                                        height={300}
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <button
                onClick={handleNext}
                className="bg-black text-white p-2 rounded-full hover:bg-neutral-800 transition"
            >
                <FaAngleRight />
            </button>
        </div>
    );
};

export default Card;
