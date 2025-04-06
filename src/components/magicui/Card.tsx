import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { motion } from "framer-motion";

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
  const [cardsToShow, setCardsToShow] = useState(3);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  // Update number of cards to show based on screen width
  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(window.innerWidth < 640 ? 1 : 3);
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Ensure currentIndex is valid when cardsToShow changes
  useEffect(() => {
    if (currentIndex > cards.length - cardsToShow) {
      setCurrentIndex(Math.max(0, cards.length - cardsToShow));
    }
  }, [cardsToShow, cards.length, currentIndex]);

  // Calculate the visible cards (no wrapping)
  const visibleCards = cards.slice(currentIndex, currentIndex + cardsToShow);

  const handleNext = () => {
    if (currentIndex + cardsToShow < cards.length) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center px-4">
      {/* Prev Button: Render only if there are previous cards */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-black text-white p-2 rounded-full hover:bg-neutral-800 transition"
        >
          <FaAngleLeft />
        </button>
      )}
      <motion.div layout className="flex gap-5 mx-auto">
        {visibleCards.map((card, index) => {
          // Determine if this card is the newly added one:
          let initialX = 0;
          if (direction === 1 && index === visibleCards.length - 1) {
            initialX = 100; // new card enters from right
          } else if (direction === -1 && index === 0) {
            initialX = -100; // new card enters from left
          }
          return (
            <motion.div
              key={currentIndex + index}
              layout
              initial={{ x: initialX, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <Link
                href={`/services/${card.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex flex-col w-full max-w-sm bg-neutral-900/50 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
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
          );
        })}
      </motion.div>
      {/* Next Button: Render only if there are further cards */}
      {currentIndex + cardsToShow < cards.length && (
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-black text-white p-2 rounded-full hover:bg-neutral-800 transition"
        >
          <FaAngleRight />
        </button>
      )}
    </div>
  );
};

export default Card;