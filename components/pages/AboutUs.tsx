import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullhorn, FaGlobe, FaClipboardList, FaQuestionCircle } from 'react-icons/fa';

const steps = [
  { step:'Step 1', id: 1, title: 'Initial Inquiry', description: 'Contact us through our website or phone to express interest in our consultation services.' },
  { step:'Step 2', id: 2, title: 'Schedule Consultation', description: 'Book a convenient time for a consultation either online or in person.' },
  { step:'Step 3', id: 3, title: 'Consultation Session', description: 'Meet with one of our experts to discuss your needs and receive a personalized plan.' },
  { step:'Step 4', id: 4, title: 'Treatment Plan', description: 'Receive a detailed treatment plan tailored to your specific requirements.' },
  { step:'Step 5', id: 5, title: 'Preparation', description: 'Prepare for your treatment with pre-procedure instructions provided by our team.' },
  { step:'Step 6', id: 6, title: 'Treatment', description: 'Undergo the treatment according to the plan, carried out by our skilled professionals.' },
  { step:'Step 7', id: 7, title: 'Follow-Up', description: 'Attend follow-up appointments to monitor progress and address any concerns.' },
  { step:'Step 8', id: 8, title: 'Ongoing Care', description: 'Receive ongoing support and care to ensure long-term success and satisfaction.' },
];

const faqs = [
  { question: 'What types of consultations do you offer?', answer: 'We offer a range of consultations including initial inquiries, detailed evaluations, and follow-up assessments.' },
  { question: 'How do I schedule a consultation?', answer: 'You can schedule a consultation through our website, by phone, or via email. Our team will assist you in finding a suitable time.' },
  { question: 'What should I expect during the consultation?', answer: 'During the consultation, our experts will discuss your needs, provide a personalized plan, and answer any questions you may have.' },
  { question: 'How long does the treatment process take?', answer: 'The duration of the treatment process varies depending on the procedure and individual needs. Our team will provide a timeline during the consultation.' },
  { question: 'Are your treatments covered by insurance?', answer: 'Insurance coverage varies by provider and plan. We recommend checking with your insurance company for details on coverage for our treatments.' },
  { question: 'What aftercare services do you provide?', answer: 'We provide comprehensive aftercare services including follow-up appointments, ongoing support, and detailed care instructions to ensure successful outcomes.' },
  { question: 'Do you offer services for international patients?', answer: 'Yes, we cater to international patients, offering services such as airport transfers, hotel accommodations, and multilingual support.' },
  { question: 'What is the cost of the treatments?', answer: 'The cost of treatments varies depending on the procedure. We offer personalized quotes during the consultation based on your specific needs.' },
  { question: 'How can I contact you if I have more questions?', answer: 'You can contact us via phone, email, or through our website’s contact form. Our team is here to assist you with any additional questions.' },
  { question: 'Where are you located?', answer: 'We are located at Vera Clinic, with facilities equipped to provide exceptional care. Visit our website for detailed address and contact information.' },
];

const AboutUs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          About Us
        </motion.h2>

        {/* Introduction Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-800 text-center max-w-3xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          At Vera Clinic, we are dedicated to providing exceptional healthcare services through a patient-centered approach.
          Our expert team utilizes cutting-edge technology to offer personalized care, aiming to set the highest standards in medical excellence.
        </motion.p>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            className="p-8 bg-white rounded-lg shadow-lg flex items-start"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEye className="text-5xl text-blue-600 mr-6" />
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                To be recognized as the most trusted healthcare provider, distinguished by our unwavering commitment to
                innovation, excellence, and compassionate care, and to establish new benchmarks in medical services.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="p-8 bg-white rounded-lg shadow-lg flex items-start"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBullhorn className="text-5xl text-green-600 mr-6" />
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We aim to deliver comprehensive and empathetic healthcare services that empower our community to lead healthier
                lives. We foster a culture of continuous improvement and excellence in all that we do.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Services */}
        <motion.div
          className="mt-16 p-8 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Our Services
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            At Vera Clinic, we offer advanced services in hair transplantation, dental treatments, and aesthetic surgeries,
            catering to international patients from over 40 countries. Our comprehensive care includes airport transfers,
            hotel accommodations, and multilingual support throughout your treatment journey.
            <br /><br />
            Our state-of-the-art facilities and expert team ensure high-quality care, with innovations such as:
            <br /><br />
            <strong>Sapphire FUE:</strong> Enhances precision with transparent blades, resulting in a denser and thicker hair appearance.
            <br /><br />
            <strong>DHI Hair Transplant:</strong> Direct implantation of hair follicles for superior, natural-looking results.
            <br /><br />
            <strong>OxyCure:</strong> Improves follicle survival rates from 70% to 98%, ensuring optimal post-procedure outcomes.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="mt-16 p-8 bg-white rounded-lg shadow-lg flex items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <FaGlobe className="text-5xl text-red-600 mr-6" />
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Choosing Vera Clinic means opting for a healthcare provider at the forefront of innovation and patient care:
              <br /><br />
              <strong>Expert Team:</strong> Our doctors are leading experts, providing top-notch treatments and procedures.
              <br /><br />
              <strong>Comprehensive Care:</strong> We offer complete care from consultation through follow-up, ensuring exceptional service.
              <br /><br />
              <strong>Advanced Technology:</strong> We employ the latest technologies and techniques for safe and effective treatments.
              <br /><br />
              <strong>Global Reach:</strong> Serving patients worldwide, our multilingual team breaks down language barriers to offer superior care.
              <br /><br />
              <strong>Award-Winning Service:</strong> Our commitment to excellence has earned us the European Award in Medicine 2021.
            </p>
          </div>
        </motion.div>

        {/* 8-Step Consultation Process */}
        <section className="mt-16">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-8 text-center">Consultation Process</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(step => (
              <motion.div
                key={step.id}
                className="p-6 bg-white rounded-lg shadow-lg flex items-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: step.id * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaClipboardList className="text-4xl text-blue-500 mr-4" />
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-2">{step.step}</h2>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-700 text-base leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mt-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FaQuestionCircle className="text-3xl text-purple-600 mr-4" />
                    <h4 className="text-xl font-semibold text-gray-900">{faq.question}</h4>
                  </div>
                  <motion.div
                    className="text-gray-700 text-base leading-relaxed"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: expandedIndex === index ? 'auto' : 0, opacity: expandedIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
