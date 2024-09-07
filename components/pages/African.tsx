import React, { useState } from 'react';
import Image from 'next/image';

interface AfricanProps {
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
  beforeAfterImages?: {
    before: string;
    after: string;
    closeUp: string;
  };
}

const African: React.FC<AfricanProps> = ({
  topHeroImage = '/images/Afro-Hair-Transplant.webp',
  title = 'African Hair Transplant',
  description = 'Experience world-class hair restoration tailored specifically for African hair types. Our African Hair Transplant services are designed to address unique hair growth patterns and provide natural-looking results with advanced techniques and personalized care.',
  advantages = [
    'Specialized techniques for African hair types',
    'Natural-looking, permanent results',
    'Customized treatment plans',
    'Experienced surgeons with extensive expertise',
    'Minimal downtime and quick recovery',
    'Affordable pricing with high-quality care'
  ],
  whyChoose = [
    'Expert team skilled in African hair restoration',
    'State-of-the-art technology and methods',
    'Personalized consultations and treatments',
    'Comprehensive pre and post-operative care',
    'Comfortable and modern facilities',
    'Transparent pricing and financing options',
    'High patient satisfaction rates'
  ],
  process = [
    {
      title: 'Before the Procedure',
      steps: [
        'Consultation: Detailed consultation to assess your hair loss and determine the best treatment plan.',
        'Pre-Treatment Analysis: Examination of your hair and scalp to tailor the procedure.',
        'Preparation: Discuss your goals and expectations with our expert team to ensure the best results.'
      ]
    },
    {
      title: 'During the Procedure',
      steps: [
        'Procedure: Advanced hair transplant techniques specifically designed for African hair types.',
        'Comfort: The procedure is performed under local anesthesia with minimal discomfort.',
        'Care: Our team ensures a comfortable and supportive environment throughout the procedure.'
      ]
    },
    {
      title: 'After the Procedure',
      steps: [
        'Immediate Aftercare: Instructions and medication provided for optimal recovery.',
        'Follow-Up: Regular check-ups to monitor progress and address any concerns.',
        'Long-Term Care: Ongoing support and advice for maintaining your new hair growth.'
      ]
    }
  ],
  faqs = [
    {
      question: 'What makes African hair transplant different?',
      answer: 'African hair transplants use specialized techniques to address the unique characteristics of African hair types, such as curl patterns and hair density. Our methods are tailored to ensure natural-looking and long-lasting results.'
    },
    {
      question: 'How long does the procedure take?',
      answer: 'The duration of the hair transplant procedure can vary depending on the extent of treatment needed. Typically, it takes between 4 to 8 hours. Your surgeon will provide a more precise estimate during your consultation.'
    },
    {
      question: 'Is there a recovery period?',
      answer: 'Yes, there is a recovery period following the procedure. Most patients experience mild swelling and discomfort, which usually subsides within a few days. Full recovery can take several weeks, during which you will need to follow aftercare instructions.'
    },
    {
      question: 'Will the results be permanent?',
      answer: 'Yes, hair transplant results are generally permanent. The transplanted hair follicles are taken from areas resistant to hair loss and will continue to grow naturally in their new location.'
    },
    {
      question: 'Are there any risks associated with the procedure?',
      answer: 'As with any surgical procedure, there are potential risks such as infection or scarring. However, these risks are minimal when performed by an experienced surgeon. We provide thorough pre-operative consultations to address any concerns and ensure a safe procedure.'
    },
    {
      question: 'What should I expect post-procedure?',
      answer: 'After the procedure, you may experience some swelling and redness. You will be given detailed aftercare instructions to follow, which will include advice on washing, medication, and lifestyle adjustments to ensure optimal results.'
    },
    {
      question: 'Is It Safe to Get an Afro Hair Transplant in Istanbul/Turkey?',
      answer: 'Getting Afro Hair Transplant surgery in Turkey is undoubtedly a safe choice. The majority of clinics offer comprehensive services to international patients, including transfers between the airport, hotel, and clinic, along with accommodation arrangements and translators to assist throughout the process. Most Turkish clinics provide an international guarantee certificate approved by the Turkish Ministry of Health, ensuring that the transplanted hair grafts will remain intact for the rest of your life.'
    },
    {
      question: 'How Much Does 5000 Grafts Afro Hair Transplant Cost?',
      answer: 'The cost of a 5000 graft procedure in Turkey can vary widely based on factors such as the clinic’s reputation, the surgeon’s qualifications, and the extent of bald areas. Typically, costs range from $X to $Y. For accurate and up-to-date pricing, contact specific clinics. It is crucial to prioritize the quality and reputation of the facility and surgeon over cost when making decisions.'
    }
  ],
  contactLink = 'https://yourclinic.com/contact',
  beforeAfterImages = {
    before: '/images/before1.jpg',
    after: '/images/before2.jpg',
    closeUp: '/images/before3.jpg'
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

      {/* Advantages Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Advantages of African Hair Transplant</h2>
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

      {/* Why Choose Istanbul/Turkey Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Istanbul/Turkey for Afro Hair Transplant?</h2>
        <p className="text-gray-600 mb-4">
          Istanbul/Turkey has rapidly ascended as a premier hub for medical tourism, drawing in patients worldwide seeking diverse medical services. Here are the detailed reasons why Istanbul/Turkey is a favorable choice for Afro hair transplant procedures:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          <li>
            <strong>Accredited Healthcare Facilities:</strong> Turkey’s concerted efforts towards healthcare reforms have resulted in the accreditation of numerous healthcare facilities, ensuring standardized quality of care. The Ministry of Health’s initiatives have positioned Turkey among the leading countries globally with a high number of accredited facilities. This commitment to quality was notably evident during the Covid-19 pandemic, highlighting Turkey’s resilience in delivering public health services.
          </li>
          <li>
            <strong>Active Research and Development:</strong> Turkey actively participates in research and development studies in collaboration with prestigious international healthcare organizations. These partnerships have led to groundbreaking medical advancements, including innovative techniques in hair transplantation. Turkey’s contributions to medical science underscore its commitment to excellence and innovation.
          </li>
          <li>
            <strong>Highly Educated Medical Professionals:</strong> Turkey boasts a skilled and educated medical workforce, facilitated by over 70 medical faculties across the country. Medical professionals undergo rigorous training programs, ensuring competence and proficiency in their respective fields. Regular inspections by the Ministry of Health further ensure the quality of medical personnel, bolstering patient confidence in the healthcare system.
          </li>
          <li>
            <strong>Quality Services at Competitive Prices:</strong> One of the most attractive aspects of seeking medical treatment in Turkey is the combination of high-quality services and competitive pricing. Compared to developed countries, medical procedures such as hair transplants are more affordable in Turkey. Additionally, inclusive services such as accommodation and transportation add value to the overall medical experience for international patients.
          </li>
          <li>
            <strong>Cultural and Historical Attractions:</strong> Beyond its medical offerings, Turkey boasts a rich cultural heritage and diverse natural landscapes, providing patients with a unique and enriching experience. Historical sites like Hagia Sophia and natural wonders such as thermal springs complement the medical journey, offering patients an opportunity for cultural exploration and relaxation during their stay.
          </li>
        </ul>
      </section>

      {/* Why Choose Vera Clinic Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Vera Clinic for Afro Hair Transplant?</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          <li>
            <strong>Comprehensive Patient Support:</strong> Vera Clinic prioritizes patient comfort and convenience, offering personalized counseling and assistance throughout the treatment process. From airport transfers to luxurious accommodation, patients receive comprehensive support tailored to their needs.
          </li>
          <li>
            <strong>Award-Winning Excellence:</strong> Recognized with the prestigious 2021 European Award in Medicine for Hair Transplant Surgery, Vera Clinic demonstrates a commitment to excellence and innovation in the field.
          </li>
          <li>
            <strong>Expert Medical Team:</strong> Vera Clinic boasts a team of highly qualified doctors and surgeons with over 15 years of experience in hair transplantation. Their blend of scientific professionalism and aesthetic expertise ensures optimal results for every patient.
          </li>
          <li>
            <strong>Proven Track Record:</strong> With a successful track record of treating over 30,000 patients from around the world since 2013, Vera Clinic has earned a reputation as a trusted and reliable provider of hair transplant services.
          </li>
          <li>
            <strong>Superior Patient Care:</strong> From the initial consultation to post-operative follow-up care spanning 18 months, Vera Clinic prioritizes patient satisfaction and provides superior-quality care at every step of the journey.
          </li>
          <li>
            <strong>State-of-the-Art Facilities:</strong> Equipped with the latest medical technology and state-of-the-art facilities, Vera Clinic ensures the highest standards of safety, efficacy, and comfort for patients undergoing hair transplant procedures.
          </li>
          <li>
            <strong>Innovative Techniques:</strong> As pioneers in the field of medical aesthetics, Vera Clinic has introduced innovative techniques such as Sapphire FUE and Oxycure Therapy, further enhancing the efficacy and success of hair transplant procedures.
          </li>
        </ul>
      </section>

      {/* Before and After Results Section */}
      {beforeAfterImages && (
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Before and After Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(beforeAfterImages).map(([key, src], index) => (
              <div key={index} className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={src}
                  alt={`${key} Afro Hair Transplant`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 ease-in-out transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                  {/* <span className="text-white font-bold text-xl">{key.charAt(0).toUpperCase() + key.slice(1)}</span> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">African Hair Transplant FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
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
          Ready to restore your hair with our specialized African hair transplant services? Book a consultation today to learn more about our approach and how we can help you achieve your hair restoration goals.
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

export default African;
