import React from 'react';
import Image from 'next/image';

// Define the type for section data
interface Section {
  id: number;
  title: string;
  content: string;
  image?: string;
}

// Example data for DHI Hair Transplant sections
const sections: Section[] = [
  {
    id: 1,
    title: 'What is DHI Hair Transplant?',
    content: 'DHI (Direct Hair Implantation) is a state-of-the-art hair restoration technique that ensures precision and natural results. This minimally invasive procedure avoids the need for cutting or stitching, directly implanting hair follicles into the scalp.',
    image: '/images/DHI-Hair-Transplant.webp'
  },
  {
    id: 2,
    title: 'Benefits of DHI Hair Transplant',
    content: 'DHI offers numerous benefits including enhanced follicle survival rate, faster recovery time, and no visible scarring. The procedure allows for precise hair placement, ensuring a natural appearance and optimal density.',
    image: '/images/dhi1.jpg'
  },
  {
    id: 3,
    title: 'Technology Used in DHI',
    content: 'The DHI technique utilizes advanced tools such as the Choi Implanter Pen, which enables accurate and efficient follicle placement. This technology ensures hair grows in a natural direction and integrates seamlessly with your existing hair.',
    image: '/images/dhi2.jpeg'
  },
  {
    id: 4,
    title: 'Frequently Asked Questions (FAQs)',
    content: 'Get answers to common questions about DHI Hair Transplant, including what to expect before, during, and after the procedure, as well as details on the recovery process and expected outcomes.',
    image: '/images/dhi4.jpg'
  },
  // Add more sections if needed
];

const DHI: React.FC = () => (
  <div className="bg-gray-100 py-16 px-4">
    <section className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">DHI Hair Transplant</h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Explore the advanced DHI Hair Transplant method, a premier choice for effective and natural-looking hair restoration.
      </p>
    </section>

    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.id} className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{section.title}</h2>
            <p className="text-base text-gray-600">{section.content}</p>
          </div>
          {section.image && (
            <div className="w-full md:w-1/2 relative h-64 md:h-80 mt-8 md:mt-0">
              <Image
                src={section.image}
                alt={section.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          )}
        </section>
      ))}
    </div>

    <section className="text-center mt-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Ready to Transform Your Life?</h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Contact us today to learn more about how DHI Hair Transplant can help you achieve your hair restoration goals.
      </p>
      <a
  href="https://5amila.com" // Ensure you use the full URL, including the protocol (https://)
  className="bg-black text-white py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-105"
>
  Contact Us
</a>

    </section>
  </div>
);

export default DHI;
