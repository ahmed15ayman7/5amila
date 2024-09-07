import React from 'react';
import Image from 'next/image';

interface OxycureProps {
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

const Oxycure: React.FC<OxycureProps> = ({
  topHeroImage = '/images/OxyCure-Therapy.webp.crdownload',
  title = 'OxyCure Therapy',
  description = 'Experience the revolutionary OxyCure Therapy designed to rejuvenate your skin and improve your overall health. Utilizing advanced oxygen technology, OxyCure Therapy promotes healing, reduces fine lines, and revitalizes your appearance for a youthful glow.',
  advantages = [
    'Enhances skin oxygenation and hydration',
    'Reduces fine lines and wrinkles',
    'Promotes faster healing and rejuvenation',
    'Improves skin texture and tone',
    'Non-invasive and pain-free',
    'Quick and effective treatment with minimal downtime'
  ],
  whyChoose = [
    'Cutting-edge oxygen technology',
    'Experienced and certified therapists',
    'Personalized treatment plans',
    'State-of-the-art facilities',
    'Comprehensive aftercare support',
    'Proven results with lasting benefits',
    'Competitive pricing with exceptional value'
  ],
  process = [
    {
      title: 'Before the Therapy',
      steps: [
        'Consultation: A detailed consultation to understand your needs and goals.',
        'Skin Analysis: Comprehensive skin analysis to customize your treatment.',
        'Preparation: Gentle skin cleansing and preparation for optimal results.'
      ]
    },
    {
      title: 'During the Therapy',
      steps: [
        'Application: Advanced oxygen technology applied to your skin for effective treatment.',
        'Comfort: Relax in a soothing environment with professional guidance throughout the session.',
        'Monitoring: Continuous monitoring to ensure maximum comfort and results.'
      ]
    },
    {
      title: 'After the Therapy',
      steps: [
        'Immediate Results: Noticeable improvement in skin texture and hydration right after the treatment.',
        'Follow-up: Schedule a follow-up to assess progress and discuss any additional care if needed.',
        'Maintenance: Receive guidance on maintaining results and maximizing benefits over time.'
      ]
    }
  ],
  faqs = [
    {
      question: 'What is OxyCure Therapy?',
      answer: 'OxyCure Therapy is an advanced skincare treatment that uses high-pressure oxygen to deliver nutrients and enhance skin health. It helps in reducing wrinkles, improving skin texture, and promoting overall rejuvenation.'
    },
    {
      question: 'How long does the therapy take?',
      answer: 'The therapy typically lasts between 30 to 60 minutes depending on the specific treatment plan. It’s a quick procedure with minimal downtime.'
    },
    {
      question: 'Is the therapy painful?',
      answer: 'No, OxyCure Therapy is a non-invasive and pain-free procedure. Most patients find it relaxing and comfortable.'
    },
    {
      question: 'How soon will I see results?',
      answer: 'Results are often visible immediately after the treatment. You may notice improved skin texture, hydration, and a youthful glow right away.'
    },
    {
      question: 'How many sessions are needed?',
      answer: 'The number of sessions required varies based on individual skin conditions and goals. Typically, a series of treatments is recommended for optimal results.'
    },
    {
      question: 'Are there any side effects?',
      answer: 'OxyCure Therapy is generally safe with minimal risk of side effects. Some individuals may experience mild redness or sensitivity, which usually subsides quickly.'
    }
  ],
  contactLink = 'https://yourclinic.com/contact'
}) => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Top/ Hero Image Section */}
      <div className="relative w-full mb-12">
        {topHeroImage && (
          <div className="relative w-full h-[500px]">
            <Image
              src={topHeroImage}
              alt="OxyCure Therapy Hero Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Description Section */}
      <section className="bg-white shadow-md rounded-lg p-8 mb-12 max-w-4xl mx-auto">
        <p className="text-gray-600">{description}</p>
      </section>

      {/* Advantages Section */}
      <section className="bg-white shadow-md rounded-lg p-8 mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Advantages of OxyCure Therapy</h2>
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

      {/* Why Choose Section */}
      <section className="bg-white shadow-md rounded-lg p-8 mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us for OxyCure Therapy?</h2>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The OxyCure Therapy Process</h2>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">OxyCure Therapy FAQs</h2>
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
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Skin?</h2>
        <p className="text-gray-600 mb-4">
          Book a consultation today and see how OxyCure Therapy can revitalize your skin and boost your confidence. Our experts are here to guide you through every step of your journey.
        </p>
        <a
          href={contactLink}
          className="inline-block px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors"
        >
          Schedule Your Consultation
        </a>
      </section>
    </div>
  );
};

export default Oxycure;
