import React from 'react';
import { useTranslations } from 'next-intl';
import CountUp from 'react-countup';
import { FaUserMd, FaUsers, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Characteristics = () => {
  const t = useTranslations('');

  const dataCharacteristics = [
    {
      title: t('characteristics.doctors.title'),
      value: 20,
      description: t('characteristics.doctors.description'),

      icon: <FaUserMd size={50} className="text-primary-500 mx-auto transition-transform duration-300" />,

    },
    {
      title: t('characteristics.visitors.title'),
      value: 1000,
      description: t('characteristics.visitors.description'),
      icon: <FaUsers size={50} className="text-primary-500 mx-auto transition-transform duration-300" />,

    },
    {
      title: t('characteristics.experience.title'),
      value: 15,
      description: t('characteristics.experience.description'),
      icon: <FaClock size={50} className="text-primary-500 mx-auto transition-transform duration-300" />,
    },
    // يمكنك إعادة تفعيل هذه البطاقة إذا أردت.
    // {
    //   title: t('characteristics.awards.title'),
    //   value: 10,
    //   description: t('characteristics.awards.description'),
    //   icon: <FaAward size={50} className="text-primary-500 mx-auto transition-transform duration-300" />,
    // },

  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-[40px] font-bold text-center mb-12">
          {t('characteristics.OurCharacteristics')}
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          {dataCharacteristics.map((item, index) => (
            <motion.div
              key={index}

              className="p-6 bg-light-1 text-primary-500 rounded-lg shadow-lg text-center cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -95 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-3xl font-semibold text-blue-600 mt-4">
                <CountUp start={0} end={item.value} duration={2.5} />
              </h3>
              <p className="text-xl font-medium mt-2 text-gray-700 hover:text-gray-900">
                {item.title}
              </p>

              <p className="text-gray-500 mt-4">{item.description}</p>
            </motion.div>

          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Characteristics;
