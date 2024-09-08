import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInfoCircle, FaCheckCircle, FaClock, FaQuestionCircle } from 'react-icons/fa';


interface CardProps {
  icon: React.ReactNode;
  title: string;
  content?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ icon, title, content, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="bg-white text-dark1 p-4 rounded-lg shadow-lg mb-4"
    >
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleCollapse}>
        <div className="flex items-center">
          <div className="mr-2 text-2xl text-[#134b70]">{icon}</div>
          <h2 className="text-xl font-semibold text-[#134b70]">{title}</h2>
        </div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#134b70]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isOpen && (
          <div className="pt-2">
            <p className="text-xl text-dark-1">{content}</p>
            {children}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

interface CardProps2 {
  icon: React.ReactNode;
  title: string;
  content?: string;
  onClick?: () => void;
}

const Card2: React.FC<CardProps2> = ({ icon, title, content, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="bg-white text-dark1 p-4 rounded-lg shadow-lg mb-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center mb-2">
        <div className="mr-2 text-2xl text-[#134b70]">{icon}</div>
        <h2 className="text-xl font-semibold text-[#134b70]">{title}</h2>
      </div>
      {content && <p className="text-xl text-dark-1">{content}</p>}
    </motion.div>
  );
};

const DHI: React.FC = () => {
  const t = useTranslations('DHI');
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);


  const handleQuestionClick = (index: number) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
      // التمرير لأسفل
      setTimeout(() => {
        const element = document.getElementById(`question-${index}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  return (
    <div className="bg-[#134b70] text-white">
      <div className="flex justify-center">
        <figure className="wp-block-image size-full is-resized is-style-default">
          <Image
            fetchPriority="high"
            decoding="async"
            width={780}
            height={470}
            src="/images/DHI-Hair-Transplant.webp"
            alt="DHI Hair Transplant"
            className="wp-image-5241"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            sizes="(max-width: 780px) 100vw, 780px"
          />
        </figure>
      </div>
      <div className="p-4">
        <div className="text-gray-300">
          <div className="wp-block-post-date__modified-date">
            <time dateTime="2024-08-05T11:52:10+00:00">
              <a href="https://www.veraclinic.net/dhi-hair-transplant/" className="text-white">{t('postDate')}</a>
            </time>
          </div>
          <h1 className="text-2xl text-gray-200 font-bold text-center mt-4">{t('title')}</h1>
        </div>
        
        {/* قائمة الأسئلة */}
        {/* <nav className="mt-4">
          <AnimatePresence>
            {[
              { title: t('howItWorks'), icon: <FaQuestionCircle />, index: 0, content: t('howItWorksContent') },
              { title: t('whatPens'), icon: <FaQuestionCircle />, index: 1, content: t('whatPensContent') },
              { title: t('procedure'), icon: <FaCheckCircle />, index: 2, content: t('procedureContent') },
              { title: t('difference'), icon: <FaCheckCircle />, index: 3, content: t('differenceContent') },
              { title: t('bestOption'), icon: <FaClock />, index: 4, content: t('bestOptionContent') },
              { title: t('benefits'), icon: <FaCheckCircle />, index: 5, content: t('benefitsContent') },
              { title: t('eligibility'), icon: <FaCheckCircle />, index: 6, content: t('eligibilityContent') },
              { title: t('duration'), icon: <FaClock />, index: 7, content: t('durationContent') },
              { title: t('faqs'), icon: <FaQuestionCircle />, index: 8, content: t('faqsContent') },
            ].map(({ title, icon, index, content }) => (
              <motion.div key={index} className="mb-4">
                <Card2
                  icon={icon}
                  title={title}
                  onClick={() => handleQuestionClick(index)}
                />
                {activeQuestion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card2 icon={icon} title={title} content={content} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </nav> */}
      </div>

      {/* Collapse for DHI Procedure */}
      <div className="mx-auto p-4">
          <Card icon={<FaCheckCircle />} title={t('dhi_work')} content={""}>
          <Card icon={<FaCheckCircle />} title={t('summary')} content={""} />
          <Card icon={<FaInfoCircle />} title={t('how_dhi')} content={""} />
          </Card>
      </div>

      <div className="mx-auto p-4">
        <Card icon={<FaClock />} title={t('pens_used')} content={t('pens_info')} />
        <Card icon={<FaCheckCircle />} title={t('best_method')} content={t('benefits_content')} />
        <Card icon={<FaCheckCircle />} title={t('eligibility2')} content={t('eligibility_content')} />
      </div>

      <div className="container mx-auto p-4">
        <Card icon={<FaQuestionCircle />} title={t('how_long_does_hair_transplant_dhi_last')} content={t('hair_transplant_info')} />
        <Card icon={<FaQuestionCircle />} title={t('faqs_about_dhi_hair_transplant')} content={""}>
          <Card icon={<FaQuestionCircle />} title={t('how_much_dhi_hair_transplant_cost')} content={t('dhi_hair_transplant_description')} />
          <Card icon={<FaQuestionCircle />} title={t('how_effective_dhi_hair_transplant')} content={t('dhi_hair_transplant_effectiveness')} />
        </Card>
      </div>
    </div>
  );
};

export default DHI;
