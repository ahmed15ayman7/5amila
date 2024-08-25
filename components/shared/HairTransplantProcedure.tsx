"use client"
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const HairTransplantProcedure: React.FC = () => {
  const pathName = usePathname();
  const lang = `${pathName.substring(1, 3)}`;
  const t = useTranslations('hair_transplant_procedure');

  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-white p-8 md:p-16">
      <h2 className="text-center text-[40px] font-extrabold mb-8 animate-fadeIn">{t('title')}</h2>
      <div className="flex flex-col md:flex-row md:space-x-12">
        {/* Left Column */}
        <div className="flex flex-col space-y-10 w-full md:w-1/2">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className={`flex items-start ${lang==="ar"?"animate-slideInRight":"animate-slideInLeft"} `}>
              <div className="flex-shrink-0 mx-6">
                <Image
                  src="/images/test2.png"
                  alt={`Step ${index + 1}`}
                  width={64}
                  height={64}
                  className="rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t(`step_${index + 1}_title`)}</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {t(`step_${index + 1}_description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-10 w-full md:w-1/2 mt-10 md:mt-0">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index + 3} className={`flex items-start ${lang==="en"?"animate-slideInRight":"animate-slideInLeft"} `}>
              <div className="flex-shrink-0 mx-6">
                <Image
                  src="/images/test2.png"
                  alt={`Step ${index + 4}`}
                  width={64}
                  height={64}
                  className="rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t(`step_${index + 4}_title`)}</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {t(`step_${index + 4}_description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairTransplantProcedure;
