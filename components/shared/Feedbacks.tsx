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
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-[40px] font-bold mb-8 text-center">{t('customerFeedback')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {feedbacks.slice(0, 3).map((feedback) => (
          <div key={feedback.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="relative w-full h-40 mb-4">
              <Image 
                src={feedback.image} 
                alt={feedback.name} 
                layout="fill" 
                objectPosition="center 30%" 
                objectFit="cover" 
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feedback.name}</h3>
            <p className="text-gray-600 mb-4">{feedback.message}</p>
            <p className="text-sm text-gray-500">{feedback.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComponent;
