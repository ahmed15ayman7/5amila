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
      icon: <FaUserMd size={50} className="w-12 h-12 text-primary-500 mx-auto" />,
    },
    {
      title: t('characteristics.visitors.title'),
      value: 1000,
      description: t('characteristics.visitors.description'),
      icon: <FaUsers size={50} className="w-12 h-12 text-primary-500 mx-auto" />,
    },
    {
      title: t('characteristics.experience.title'),
      value: 15,
      description: t('characteristics.experience.description'),
      icon: <FaClock size={50} className="w-12 h-12 text-primary-500 mx-auto" />,
    },
    // {
    //   title: t('characteristics.awards.title'),
    //   value: 10,
    //   description: t('characteristics.awards.description'),
    //   icon: <FaAward size={50} className="w-12 h-12 text-primary-500 mx-auto" />,
    // },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-[40px] font-bold text-center mb-8">
          {t('characteristics.OurCharacteristics')}
        </h2>
        <div className=" gap-6 flex justify-center">
          {dataCharacteristics.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-light-1 text-primary-500 rounded-lg shadow-md text-center"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold text-blue-600 mt-4">
                <CountUp start={0} end={item.value} duration={2.5} />
              </h3>
              <p className="text-xl font-medium text-gray-700 mt-2">
                {item.title}
              </p>
              <p className="text-gray-500 mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characteristics;
