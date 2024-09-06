import React from 'react';
import Image from 'next/image';

interface HairlineSurgeryProps {
  topHeroImage?: string;
  title?: string;
  description?: string;
  advantages?: string[];
  whyChoose?: string[];
  process?: {
    title: string;
    steps: string[];
  }[];
  faqs?: { question: string; answer: string }[];
  contactLink?: string;
}

const HairlineSurgery: React.FC<HairlineSurgeryProps> = ({
  topHeroImage = '/images/Hairline-Surgery.webp', // Default path for top/hero image
  title = 'Hairline Restoration in Turkey',
  description = 'Discover a new world of confidence and style with Hairline Restoration in Turkey at Vera Clinic. Our state-of-the-art facilities and exceptionally skilled doctors offer the ultimate solution for a fuller, more voluminous hair. With Turkey being a global leader in medical tourism, Vera Clinic stands out for pioneering hair rejuvenation techniques and delivering outstanding results.',
  advantages = [
    'Restore a thinning or receding hairline',
    'Achieve a youthful, natural-looking hairline',
    'Target just the hairline rather than a full hair transplant',
    'Long-term, permanent results',
    'Cost-effective hairline transplant price',
    'Minimal discomfort during surgery'
  ],
  whyChoose = [
    'State-of-the-art facilities',
    'Qualified and experienced medical team',
    'Accommodation and onward travel included',
    'Expert aftercare and patient care',
    'High-quality standards of service',
    'Permanent, natural-looking results',
    'Trusted destination for medical tourists',
    'Affordable procedure costs'
  ],
  process = [
    {
      title: 'Before the Treatment',
      steps: [
        'Enjoy a free hair analysis to ensure hairline surgery suits your needs.',
        'A free, bespoke consultation to ensure you have the best results from one of our expert consultants.',
        'Customer service 24/7: Our team will look after you from day 1 and are available 24/7.'
      ]
    },
    {
      title: 'During the Treatment',
      steps: [
        'Transportation: We can help arrange VIP transport to and from the airport, as well as to our hair clinic.',
        'Accommodation: We will assist with arranging accommodation for your stay, ensuring safety and comfort.',
        'Translation: We offer translation services to assist you during your trip. We speak your language!',
        'Medical Pack: We will provide all the necessary medication and care.'
      ]
    },
    {
      title: 'After the Treatment',
      steps: [
        'Regular Checkups: We offer regular checkups with our expert team to ensure proper healing.',
        'Guarantee Program: We offer a guarantee on our treatments, emphasizing value and quality.',
        'Additional Advice: We provide consistent advice post-procedure on additional treatments for long-term results.'
      ]
    }
  ],
  faqs = [
    {
      question: 'Why should I choose hairline restoration in Turkey?',
      answer: 'Turkey is one of the world’s most prominent medical tourism destinations. Vera Clinic offers expert care at a fraction of the cost compared to Europe, the UK, or the US. The country is known for its state-of-the-art facilities, highly skilled surgeons, and affordable prices, making it an attractive choice for hairline restoration.'
    },
    {
      question: 'How long does hairline restoration take to complete?',
      answer: 'The procedure typically takes 4-5 hours. Your doctor will provide a clear timeline during your consultation. Recovery usually takes at least 2 weeks, during which you need to follow aftercare instructions carefully.'
    },
    {
      question: 'What is the cost of hairline restoration in Turkey?',
      answer: 'Costs vary based on individual needs. Contact us for a personalized quotation. Generally, treatments in Turkey are much more affordable compared to the US, UK, or Europe, providing significant savings.'
    },
    {
      question: 'Are the results of hairline restoration permanent?',
      answer: 'Yes, the results are generally permanent as long as you follow post-operative care instructions. Your aftercare program will help ensure a quick recovery and optimal results.'
    },
    {
      question: 'Are there alternatives to having hairline restoration?',
      answer: 'Yes, alternatives include FUE hair transplants, beard transplants, and mustache transplants. We can advise on suitable procedures based on your needs during a consultation.'
    },
    {
      question: 'Can I have more than one type of treatment at once?',
      answer: 'Yes, many patients opt for multiple procedures. We offer customized treatment plans that can address various concerns simultaneously, such as combining hairline restoration with beard or facial hair treatments.'
    }
  ],
  contactLink = 'https://5amila.com'
}) => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Top/ Hero Image Section */}
      <div className="relative w-full mb-12">
        {topHeroImage && (
          <div className="relative w-full h-[500px]"> {/* Adjusted height */}
            <Image
              src={topHeroImage}
              alt="Hairline Restoration Hero Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center px-4">{title}</h1>
        </div> */}
      </div>

      {/* Description Section */}
      <section className="bg-white shadow-md rounded-lg p-8 mb-12 max-w-4xl mx-auto">
        <p className="text-gray-600">{description}</p>
      </section>

      {/* Advantages Section */}
      <section className="bg-white shadow-md rounded-lg p-8 mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Hairline Restoration Advantages</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              {advantage}
            </li>
          ))}
        </ul>
      </section>

      {/* Why Choose Vera Clinic Section */}
      <section className="bg-white shadow-md rounded-lg p-8 mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Vera Clinic?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {whyChoose.map((reason, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              {reason}
            </li>
          ))}
        </ul>
      </section>

      {/* Process Section */}
      {process.length > 0 && (
        <section className="bg-white shadow-md rounded-lg p-8 mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Process for Hairline Restoration</h2>
          {process.map((step, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {step.steps.map((stepItem, stepIndex) => (
                  <li key={stepIndex} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {stepItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <section className="bg-white shadow-md rounded-lg p-8 mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Hairline Restoration FAQs</h2>
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <dt className="text-xl font-semibold text-gray-800">{faq.question}</dt>
                <dd className="mt-2 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Contact Section */}
      <section className="bg-blue-50 p-8 rounded-lg mb-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Book Your Consultation Today</h2>
        <p className="text-gray-600 mb-4">
          Ready to take the next step toward a fuller, more voluminous hair? Book a consultation with our experts and discover if hairline restoration is right for you.
        </p>
        <a
          href={contactLink}
          className="inline-block px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors"
        >
          Schedule a Consultation
        </a>
      </section>
    </div>
  );
};

export default HairlineSurgery;
