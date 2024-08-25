import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface Feedback {
  id: number;
  name: string;
  message: string;
  date: string;
  image: string;
}

const feedbacks: Feedback[] = [
  {
    id: 1,
    name: "Alice",
    message: "Great service!",
    date: "August 20, 2024",
    image: "/images/test.png", // Replace with the actual path to the image
  },
  {
    id: 2,
    name: "Bob",
    message: "I loved the experience!",
    date: "August 21, 2024",
    image: "/images/test.png", // Replace with the actual path to the image
  },
  {
    id: 3,
    name: "Charlie",
    message: "Will recommend to others.",
    date: "August 22, 2024",
    image: "/images/test.png", // Replace with the actual path to the image
  },
  // Add more feedback objects if needed
];

const FeedbackComponent = () => {
  const t = useTranslations('feedbacks');

  return (
    <div className="container mx-auto py-6 px-2">
      <h1 className="text-[32px] font-bold mb-6 text-center">{t('customerFeedback')}</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {feedbacks.slice(0, 3).map((feedback) => (
          <div 
            key={feedback.id} 
            className="bg-white rounded-lg shadow-md p-4 max-w-xs w-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="relative w-full h-32 mb-3">
              <Image 
                src={feedback.image} 
                alt={feedback.name} 
                layout="fill" 
                objectPosition="center" 
                objectFit="cover" 
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">{feedback.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{feedback.message}</p>
            <p className="text-xs text-gray-500">{feedback.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComponent;
