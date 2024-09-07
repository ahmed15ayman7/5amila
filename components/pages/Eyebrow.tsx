import React, { useState } from 'react';
import Image from 'next/image';

interface EyebrowTransplantProps {
  topHeroImage?: string;
  title?: string;
  description?: string;
  benefits?: string[];
  process?: {
    title: string;
    steps: string[];
  }[];
  faqs?: { question: string; answer: string }[];
  contactLink?: string;
  testimonials?: {
    name: string;
    testimonial: string;
    image?: string;
  }[];
  costRange?: string;
  surgeons?: {
    name: string;
    specialty: string;
    image?: string;
  }[];
  galleryImages?: string[];
  financingOptions?: {
    title: string;
    options: string[];
  };
}

const EyebrowTransplant: React.FC<EyebrowTransplantProps> = ({
  topHeroImage = '/images/eyebrow-transplant.webp',
  title = 'Eyebrow Transplant in Turkey',
  description = 'Transform your look with an eyebrow transplant in Turkey. Our advanced techniques and experienced surgeons provide natural-looking results, tailored to your aesthetic preferences and needs.',
  benefits = [
    'Natural-looking results tailored to your face shape',
    'Advanced techniques for precise hair placement',
    'Minimally invasive procedure with minimal downtime',
    'Experienced surgeons specializing in eyebrow restoration',
    'Affordable pricing compared to other countries',
    'Comprehensive care and support throughout your journey'
  ],
  process = [
    {
      title: 'Consultation & Planning',
      steps: [
        'Initial Consultation: Discuss your goals and expectations with our experts.',
        'Design: Customize the eyebrow shape based on your facial features and preferences.',
        'Preparation: Review the procedure steps and pre-treatment care.'
      ]
    },
    {
      title: 'The Procedure',
      steps: [
        'Anesthesia: Local anesthesia is applied to ensure comfort during the procedure.',
        'Extraction: Hair follicles are extracted from a donor area, usually the back of the head.',
        'Implantation: Hair follicles are carefully implanted into the eyebrow area to achieve the desired shape and density.'
      ]
    },
    {
      title: 'Post-Procedure Care',
      steps: [
        'Aftercare Instructions: Follow guidelines for cleaning, medication, and avoiding specific activities.',
        'Follow-Up: Regular check-ups to monitor healing and results.',
        'Maintenance: Tips on maintaining your new eyebrows and ensuring long-term results.'
      ]
    }
  ],
  faqs = [
    {
      question: 'How can I tackle eyebrow hair loss?',
      answer: 'An eyebrow transplant provides a permanent solution by implanting donor hair into the brows. It addresses issues caused by health conditions, genetics, or other factors, resulting in healthy, beautiful eyebrows that last.'
    },
    {
      question: 'How long does an eyebrow transplant last?',
      answer: 'An eyebrow transplant offers a permanent solution, with the transplanted hair continuing to grow naturally and remain in place for the patient’s lifetime.'
    },
    {
      question: 'Is an eyebrow hair transplant risky?',
      answer: 'The procedure is typically painless with minimal swelling and scabbing. With experienced surgeons, the risk of complications is very low, and most patients find the results to be highly successful.'
    },
    {
      question: 'How popular are eyebrow transplants in Turkey?',
      answer: 'Eyebrow transplants have gained significant popularity in Turkey, with many clinics, including Vera Clinic, conducting numerous procedures each year.'
    },
    {
      question: 'What is involved in an eyebrow transplant procedure?',
      answer: 'The procedure involves extracting individual hair follicles from a donor area, usually the scalp, and implanting them into tiny incisions made in the eyebrow area. The process takes 3-5 hours.'
    },
    {
      question: 'What are some benefits of eyebrow transplants?',
      answer: 'Benefits include improved eyebrow shape, filling in sparse areas, and achieving a natural look. It is a permanent solution that requires minimal maintenance after the procedure.'
    },
    {
      question: 'What is the recovery process like after an eyebrow transplant in Turkey?',
      answer: 'Recovery is generally quick, with most patients resuming daily activities within 48 hours. Initial soreness and crusting are normal, and full recovery typically occurs within two weeks.'
    },
    {
      question: 'Can I have more than one type of treatment at once?',
      answer: 'Yes, it is possible to receive multiple treatments at once, such as eyebrow transplants along with other procedures like beard transplants or cosmetic enhancements.'
    },
    {
      question: 'Could you recommend some tips for someone who is planning to get an eyebrow transplant in Turkey?',
      answer: 'Thoroughly research and choose a reputable clinic like Vera Clinic. Discuss all your concerns with your surgeon and ensure you are comfortable with the procedure and aftercare.'
    },
    {
      question: 'How much does an eyebrow transplant cost in Turkey?',
      answer: 'At Vera Clinic, the cost of an eyebrow transplant ranges from 3,000 to 3,500 EUR, depending on the number of grafts required.'
    }
  ],
  contactLink = 'https://5amila.com',
  testimonials = [
    {
      name: 'John Doe',
      testimonial: 'My eyebrow transplant experience at Vera Clinic was outstanding. The results were natural and exceeded my expectations. Highly recommended!',
      image: '/images/test5.png'
    },
    {
      name: 'Jane Smith',
      testimonial: 'The team at Vera Clinic was professional and attentive throughout the entire process. I’m thrilled with my new eyebrows and the confidence they’ve given me.',
      image: '/images/test.png'
    }
  ],
  costRange = '3,000 to 3,500 EUR',
  surgeons = [
    {
      name: 'Dr. Alice Johnson',
      specialty: 'Lead Eyebrow Transplant Surgeon',
      image: '/images/doc1.webp'
    },
    {
      name: 'Dr. Mark Lee',
      specialty: 'Cosmetic Surgery Specialist',
      image: '/images/doc2.jpg'
    }
  ],
  galleryImages = [
    '/images/eyebrow1.jfif',
    '/images/eyebrow2.jfif',
    '/images/eyebrow3.jfif'
  ],
  financingOptions = {
    title: 'Financing Options',
    options: [
      'Flexible Payment Plans',
      '0% Interest Financing',
      'Insurance Partnerships',
      'Monthly Installments'
    ]
  }
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Top/ Hero Image Section */}
      <div className="relative w-full mb-12">
        {topHeroImage && (
          <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={topHeroImage}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 ease-in-out transform hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* Description Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
        <p className="text-gray-600 text-lg">{description}</p>
      </section>

      {/* Benefits Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Eyebrow Transplant</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Process Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Process</h2>
        {process.map((step, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-600">
              {step.steps.map((stepDetail, subIndex) => (
                <li key={subIndex}>{stepDetail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Gallery of Results Section */}
      {galleryImages.length > 0 && (
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Gallery of Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Eyebrow Transplant Result ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 ease-in-out transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Meet Our Surgeons Section */}
      {surgeons.length > 0 && (
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Surgeons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {surgeons.map((surgeon, index) => (
              <div key={index} className="flex items-center space-x-4 border-b border-gray-200 pb-6 mb-6 hover:bg-gray-50 transition-colors duration-300">
                {surgeon.image && (
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300 shadow-lg">
                    <Image
                      src={surgeon.image}
                      alt={surgeon.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 ease-in-out transform hover:scale-105"
                    />
                  </div>
                )}
                <div>
                  <p className="text-xl font-semibold text-gray-800">{surgeon.name}</p>
                  <p className="text-gray-600">{surgeon.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Financing Options Section */}
      {financingOptions && (
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{financingOptions.title}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {financingOptions.options.map((option, index) => (
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
                {option}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Patient Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Patient Testimonials</h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex items-center space-x-6 border-b border-gray-200 pb-6 mb-6">
                {testimonial.image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                )}
                <div>
                  <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 mt-2">{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full text-left py-4 px-6 flex justify-between items-center text-xl font-semibold text-gray-800 focus:outline-none transition-colors duration-300 hover:text-gray-600"
                >
                  {faq.question}
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
                >
                  <div className="p-6 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="bg-blue-50 p-8 rounded-lg mb-12 max-w-4xl mx-auto text-center transition-transform duration-700 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Schedule Your Consultation</h2>
        <p className="text-gray-600 mb-4">
          Ready to enhance your look with our eyebrow transplant services? Book a consultation today to explore your options and start your journey toward a more confident you.
        </p>
        <a
          href={contactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
        >
          Book Your Consultation
        </a>
      </section>
    </div>
  );
};

export default EyebrowTransplant;
