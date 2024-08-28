import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaClipboardList } from 'react-icons/fa';
import Image from 'next/image';

// Expanded reviews data
const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'The experience was incredible. The team at Vera Clinic took great care of me, and the results are beyond my expectations.',
    rating: 5,
    photo: '/images/test.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'I am very pleased with my hair transplant. The procedure was smooth, and the staff was professional and friendly.',
    rating: 4,
    photo: '/images/test.png',
  },
  {
    id: 3,
    name: 'Robert Brown',
    review: 'Highly recommend Vera Clinic for hair transplants. The results were great, and the support throughout was exceptional.',
    rating: 5,
    photo: '/images/test.png',
  },
  {
    id: 4,
    name: 'Emily Clark',
    review: 'The whole process was seamless, and the team made sure I was comfortable every step of the way. Fantastic results!',
    rating: 5,
    photo: '/images/test.png',
  },
  {
    id: 5,
    name: 'Michael Lee',
    review: 'Great service from start to finish. The clinic provided excellent care, and I am thrilled with the results.',
    rating: 4,
    photo: '/images/test.png',
  },
  {
    id: 6,
    name: 'Sophia Martinez',
    review: 'Vera Clinic exceeded my expectations. The staff was friendly and the results are amazing. Highly recommended!',
    rating: 5,
    photo: '/images/test.png',
  },
  // Adding 12 more reviews
  {
    id: 7,
    name: 'Alice Johnson',
    review: 'A top-notch clinic with exceptional service. My hair looks great, and the process was very smooth.',
    rating: 5,
    photo: '/images/test.png',
  },
  {
    id: 8,
    name: 'David Wilson',
    review: 'I had a wonderful experience at Vera Clinic. The staff was supportive, and the results speak for themselves.',
    rating: 4,
    photo: '/images/test.png',
  },
  {
    id: 9,
    name: 'Olivia White',
    review: 'Amazing results and fantastic service. I am extremely happy with my hair transplant.',
    rating: 5,
    photo: '/images/test.png',
  },
  {
    id: 10,
    name: 'Daniel Scott',
    review: 'Very professional team and excellent care. My hair transplant journey was made easy and comfortable.',
    rating: 4,
    photo: '/images/test.png',
  },
  {
    id: 11,
    name: 'Mia Lewis',
    review: 'The results are outstanding! Vera Clinic did an amazing job, and I couldn’t be happier with my new look.',
    rating: 5,
    photo: '/images/test.png',
  },
  {
    id: 12,
    name: 'James King',
    review: 'Great experience from start to finish. The team was attentive and the results were better than expected.',
    rating: 5,
    photo: '/images/test.png',
  },
  {
    id: 13,
    name: 'Isabella Moore',
    review: 'I highly recommend Vera Clinic for hair transplants. The procedure was efficient, and the results are impressive.',
    rating: 4,
    photo: '/images/test.png',
  },
  {
    id: 14,
    name: 'Ethan Hall',
    review: 'The whole process was smooth and the results are fantastic. The staff was incredibly helpful throughout.',
    rating: 5,
    photo: '/images/test.png',
  },
  {
    id: 15,
    name: 'Charlotte Adams',
    review: 'Wonderful service and fantastic results. I’m very satisfied with my hair transplant experience at Vera Clinic.',
    rating: 5,
    photo: '/images/test.png',
  },
  {
    id: 16,
    name: 'Benjamin Carter',
    review: 'Excellent care and great results. The team at Vera Clinic was professional and attentive.',
    rating: 4,
    photo: '/images/test.png',
  },
  {
    id: 17,
    name: 'Amelia Green',
    review: 'Highly satisfied with the results of my hair transplant. The clinic provided top-notch care and service.',
    rating: 5,
    photo: '/images/test.png',
  },
  {
    id: 18,
    name: 'Lucas Wright',
    review: 'Great experience overall. The staff was friendly and the results exceeded my expectations.',
    rating: 4,
    photo: '/images/test.png',
  },
];

const steps = [
  { step: 'Step 1', title: 'Initial Inquiry', description: 'Contact us through our website or phone to express interest in our consultation services.' },
  { step: 'Step 2', title: 'Schedule Consultation', description: 'Book a convenient time for a consultation either online or in person.' },
  { step: 'Step 3', title: 'Consultation Session', description: 'Meet with one of our experts to discuss your needs and receive a personalized plan.' },
  { step: 'Step 4', title: 'Treatment Plan', description: 'Receive a detailed treatment plan tailored to your specific requirements.' },
  { step: 'Step 5', title: 'Preparation', description: 'Prepare for your treatment with pre-procedure instructions provided by our team.' },
  { step: 'Step 6', title: 'Treatment', description: 'Undergo the treatment according to the plan, carried out by our skilled professionals.' },
  { step: 'Step 7', title: 'Follow-Up', description: 'Attend follow-up appointments to monitor progress and address any concerns.' },
  { step: 'Step 8', title: 'Ongoing Care', description: 'Receive ongoing support and care to ensure long-term success and satisfaction.' },
];

const HairTransplantDetails = () => (
  <section className="mt-16 py-8 bg-gray-100">
    <div className="container mx-auto px-6 md:px-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Why Choose Vera Clinic?</h1>
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        As indicated by our hair transplant in Turkey reviews, our patients always leave pleased for many reasons. Positive feedback for procedures such as our FUE hair transplant reviews in Turkey is a clear example of how we consistently aim to give our patients the best treatments available internationally and how our expert medical team acts with compassion and understanding, providing the very finest aftercare. What we offer as the best-reviewed hair transplant clinic Turkey includes the following:
      </p>
      <div className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-4xl">
        <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 mb-12">
          <li>High-quality service standards in patient care</li>
          <li>Modern, state-of-the-art hospital facilities</li>
          <li>Fully qualified medical staff and expert surgeons</li>
          <li>The best-priced hair transplants in the world</li>
          <li>Expert aftercare advice to achieve the best results</li>
        </ul>
      </div><br /><br />
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center">Hair Transplant Turkey Details</h2>
      <div className="text-center text-lg md:text-xl text-gray-700">
        <p><strong>Procedure Time:</strong> 6–8 hours</p>
        <p><strong>Anesthetic:</strong> Local anesthetic/General anesthetic/Sedation/Laughing Gas</p>
        <p><strong>Recovery Time:</strong> 10–15 Days</p>
        <p><strong>Accommodation & Transfer:</strong> Included</p>
      </div>
    </div>
  </section>
);

const ReviewCard = ({ name, review, rating, photo }: any) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <FaStar key={index} className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
  ));

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={photo}
        alt={name}
        width={120}
        height={100}
        className="rounded mb-4 object-cover h-20"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <div className="flex mb-4">
        {stars}
      </div>
      <p className="text-gray-600">{review}</p>
    </motion.div>
  );
};

// Calculate the average rating
const getAverageRating = (reviews: { rating: number }[]) => {
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  return (totalRating / reviews.length).toFixed(1);
};

const HairTransplantReviews = () => {
  const averageRating = getAverageRating(reviews);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hair Transplant Reviews in Turkey
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Read what our patients have to say about their hair transplant experiences with Vera Clinic. Our commitment to excellence is reflected in their stories.
        </motion.p>

        {/* Average Rating Section */}
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Overall Rating: {averageRating} / 5
        </motion.h1>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              review={review.review}
              rating={review.rating}
              photo={review.photo}
            />
          ))}
        </div>

        {/* Consultation Process */}
        <section className="mt-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Consultation Process</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="p-6 bg-black rounded-lg shadow-lg flex items-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaClipboardList className="text-4xl text-blue-500 mr-4" />
                <div>
                  <h2 className="text-xl font-extrabold text-white mb-2">{step.step}</h2>
                  <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-200 text-white leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Hair Transplant Details */}
        <HairTransplantDetails />
      </div>
    </section>
    
  );
};

export default HairTransplantReviews;
