import React from 'react';
import Image from 'next/image';

// Define the type for institution data
interface Institution {
  id: number;
  name: string;
  description: string;
  logo: string;
  website: string;
  contactEmail?: string;
  location?: string;
}

// Unique data for each section
const allInstitutions: Institution[] = [
  {
    id: 1,
    name: 'Institution A',
    description: 'A leading institution in health research and education, renowned for its innovative approaches and contributions.',
    logo: '/images/partner1.webp',
    website: 'https://partnera.com',
    contactEmail: 'contact@partner1.com',
    location: 'New York, USA'
  },
  {
    id: 2,
    name: 'Institution B',
    description: 'An institution at the forefront of technological advancements in healthcare, dedicated to improving patient outcomes.',
    logo: '/images/partner2.webp',
    website: 'https://partnerb.com',
    contactEmail: 'info@partnerb.com',
    location: 'San Francisco, USA'
  },
  {
    id: 3,
    name: 'Institution C',
    description: 'A prestigious institution known for its pioneering work in scientific research and its impact on global health policies.',
    logo: '/images/partner3.webp',
    website: 'https://partnerc.com',
    contactEmail: 'contact@partnerc.com',
    location: 'London, UK'
  },
  // Add more institutions as needed
];

const ourPartners: Institution[] = [
  {
    id: 6,
    name: 'Institution F',
    description: 'An innovative leader in healthcare and medical research with a global presence and a commitment to advancing health sciences.',
    logo: '/images/partner4.webp',
    website: 'https://partnerf.com',
    contactEmail: 'contact@partnerf.com',
    location: 'Berlin, Germany'
  },
  {
    id: 7,
    name: 'Institution G',
    description: 'A renowned healthcare institution focusing on cutting-edge treatments and comprehensive patient care.',
    logo: '/images/partner5.webp',
    website: 'https://partnerg.com',
    contactEmail: 'info@partnerg.com',
    location: 'Paris, France'
  },
  {
    id: 8,
    name: 'Institution H',
    description: 'A top institution specializing in health technology and innovative patient care solutions.',
    logo: '/images/partner6.webp',
    website: 'https://partnerh.com',
    contactEmail: 'contact@partnerh.com',
    location: 'Toronto, Canada'
  },
  // Add more institutions as needed
];

const featuredPartners: Institution[] = [
  {
    id: 11,
    name: 'Institution K',
    description: 'A leading global player in medical research and clinical trials, with a focus on cutting-edge therapies.',
    logo: '/images/partner7.webp',
    website: 'https://partnerk.com',
    contactEmail: 'contact@partnerk.com',
    location: 'Los Angeles, USA'
  },
  {
    id: 12,
    name: 'Institution L',
    description: 'An institution known for its breakthrough research in genetic medicine and personalized health solutions.',
    logo: '/images/partner8.webp',
    website: 'https://partnerl.com',
    contactEmail: 'info@partnerl.com',
    location: 'Madrid, Spain'
  },
  {
    id: 13,
    name: 'Institution M',
    description: 'A prominent institution in preventive medicine and global health initiatives.',
    logo: '/images/partner9.webp',
    website: 'https://partnerm.com',
    contactEmail: 'contact@partnerm.com',
    location: 'Sydney, Australia'
  },
  // Add more institutions as needed
];

// Reusable Institution Card Component
const InstitutionCard: React.FC<{ institution: Institution }> = ({ institution }) => (
  <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl p-4 max-w-xs mx-2">
    <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 overflow-hidden mb-4">
      <Image
        src={institution.logo}
        alt={`${institution.name} Logo`}
        layout="fill"
        objectFit="contain"
        className="w-full h-full"
      />
    </div>
    <div className="text-center">
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">{institution.name}</h3>
      <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4">{institution.description}</p>
      {institution.location && (
        <p className="text-xs md:text-sm lg:text-base text-gray-400 mb-2">Location: {institution.location}</p>
      )}
      {institution.contactEmail && (
        <p className="text-xs md:text-sm lg:text-base text-gray-400 mb-2">
          Contact: <a href={`mailto:${institution.contactEmail}`} className="text-blue-600 hover:text-blue-800">{institution.contactEmail}</a>
        </p>
      )}
      <a
        href={institution.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        Visit Website
      </a>
    </div>
  </div>
);

const PartnerInstitutions: React.FC = () => (
  <div className="py-16 px-4 bg-gray-50">
    {/* Section 1: All Health Institutions We Have Partnered With */}
    <section className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">All Health Institutions We Have Partnered With</h2>
      <p className="text-base md:text-lg text-center text-gray-700 mb-12">
        We are proud to collaborate with esteemed health institutions that share our commitment to advancing healthcare and research.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {allInstitutions.map((institution) => (
          <InstitutionCard key={institution.id} institution={institution} />
        ))}
      </div>
    </section>

    {/* Section 2: Our Partners */}
    <section className="mb-16 bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">Our Partners</h2>
      <p className="text-base md:text-lg text-center text-gray-700 mb-12">
        Here are some of our key partners who help us achieve our mission of enhancing healthcare through collaboration.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {ourPartners.map((institution) => (
          <InstitutionCard key={institution.id} institution={institution} />
        ))}
      </div>
    </section>

    {/* Section 3: Featured Partners */}
    <section>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">Featured Partners</h2>
      <p className="text-base md:text-lg text-center text-gray-700 mb-12">
        We highlight some of our featured partners who have made significant impacts in the healthcare sector.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {featuredPartners.map((institution) => (
          <InstitutionCard key={institution.id} institution={institution} />
        ))}
      </div>
    </section>
  </div>
);

export default PartnerInstitutions;
