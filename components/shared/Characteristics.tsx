import React from 'react';
import { useTranslations } from 'next-intl';
import CountUp from 'react-countup';
import { FaUserMd, FaUsers, FaClock, FaAward } from 'react-icons/fa';

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
        <h2 className="text-[40px] font-bold text-center mb-8">
          {t('characteristics.OurCharacteristics')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataCharacteristics.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-light-1 text-primary-500 rounded-lg shadow-md text-center transition duration-300 transform hover:scale-110 hover:shadow-xl "
            >
              <div className="hover:scale-110">{item.icon}</div>
              <h3 className="text-2xl font-semibold mt-4 text-gray-700 hover:text-gray-900">
                <CountUp start={0} end={item.value} duration={2.5} />
              </h3>
              <p className="text-xl font-medium mt-2 text-gray-700 hover:text-gray-900">
                {item.title}
              </p>
              <p className="text-gray-500 mt-4 hover:text-dark-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characteristics;
