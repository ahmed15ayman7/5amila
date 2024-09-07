import Image from "next/image";
import React from "react";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const OurTeam = () => {
  const t = useTranslations('team');

  return (
    <div className="flex flex-col items-center justify-center py-16 p-4">
      <h2 className="text-[32px] font-bold text-center mb-6">
        {t('ourTeam')}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Team Member Card 1 */}
        <div className="w-48 border-2 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <Image
              src="/images/doc1.webp"
              alt="Team Member 1"
              layout="responsive"
              width={80}
              height={60}
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="w-full text-gray-200 fill-current">
                <path
                  fillOpacity="1"
                  d="M0,256L48,213.3C96,171,192,85,288,64C384,43,480,85,576,133.3C672,181,768,235,864,234.7C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </div>
          <ul className="flex justify-around p-2 bg-gray-100 rounded-b-md">
            <li>
              <Link href="https://twitter.com/yourprofile" passHref>
                <TwitterOutlined className="text-2xl" style={{ color: '#1DA1F2' }} />
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com/yourprofile" passHref>
                <FacebookOutlined className="text-2xl" style={{ color: '#1877F2' }} />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/yourprofile" passHref>
                <InstagramOutlined className="text-2xl" style={{ color: '#E1306C' }} />
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/yourprofile" passHref>
                <LinkedinOutlined className="text-2xl" style={{ color: '#0A66C2' }} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Team Member Card 2 */}
        <div className="w-48 border-2 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <Image
              src="/images/doc2.jpg"
              width={400}
              height={600}
              alt="Team Member 2"
            />
            <div className="absolute inset-x-0 bottom-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="w-full text-gray-200 fill-current">
                <path
                  fillOpacity="1"
                  d="M0,256L48,213.3C96,171,192,85,288,64C384,43,480,85,576,133.3C672,181,768,235,864,234.7C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </div>
          <ul className="flex justify-around p-2 bg-gray-100 rounded-b-md">
            <li>
              <Link href="https://twitter.com/yourprofile" passHref>
                <TwitterOutlined className="text-2xl" style={{ color: '#1DA1F2' }} />
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com/yourprofile" passHref>
                <FacebookOutlined className="text-2xl" style={{ color: '#1877F2' }} />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/yourprofile" passHref>
                <InstagramOutlined className="text-2xl" style={{ color: '#E1306C' }} />
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/yourprofile" passHref>
                <LinkedinOutlined className="text-2xl" style={{ color: '#0A66C2' }} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Team Member Card 3 */}
        <div className="w-48 border-2 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <Image
              src="/images/doc3.jpg"
              alt="Team Member 3"
              layout="responsive"
              width={80}
              height={80}
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="w-full text-gray-200 fill-current">
                <path
                  fillOpacity="1"
                  d="M0,256L48,213.3C96,171,192,85,288,64C384,43,480,85,576,133.3C672,181,768,235,864,234.7C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </div>
          <ul className="flex justify-around p-2 bg-gray-100 rounded-b-md">
            <li>
              <Link href="https://twitter.com/yourprofile" passHref>
                <TwitterOutlined className="text-2xl" style={{ color: '#1DA1F2' }} />
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com/yourprofile" passHref>
                <FacebookOutlined className="text-2xl" style={{ color: '#1877F2' }} />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/yourprofile" passHref>
                <InstagramOutlined className="text-2xl" style={{ color: '#E1306C' }} />
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/yourprofile" passHref>
                <LinkedinOutlined className="text-2xl" style={{ color: '#0A66C2' }} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Team Member Card 4 */}
        <div className="w-48 border-2 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <Image
              src="/images/doc4.jpg"
              alt="Team Member 4"
              layout="responsive"
              width={80}
              height={60}
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="w-full text-gray-200 fill-current">
                <path
                  fillOpacity="1"
                  d="M0,256L48,213.3C96,171,192,85,288,64C384,43,480,85,576,133.3C672,181,768,235,864,234.7C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </div>
          <ul className="flex justify-around p-2 bg-gray-100 rounded-b-md">
            <li>
              <Link href="https://twitter.com/yourprofile" passHref>
                <TwitterOutlined className="text-2xl" style={{ color: '#1DA1F2' }} />
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com/yourprofile" passHref>
                <FacebookOutlined className="text-2xl" style={{ color: '#1877F2' }} />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/yourprofile" passHref>
                <InstagramOutlined className="text-2xl" style={{ color: '#E1306C' }} />
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/yourprofile" passHref>
                <LinkedinOutlined className="text-2xl" style={{ color: '#0A66C2' }} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
