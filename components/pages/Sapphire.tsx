import React from 'react';
import Image from 'next/image';

// Define a type for the component props
interface SapphireProps {
  logo?: string;
  title?: string;
  description?: string;
  benefits?: string[];
  contactLink?: string;
  sapphireFUEDescription?: string;
  sapphireFUEvsFUE?: { title: string; description: string }[];
  dhiDescription?: string;
  sapphireFUEvsDHI?: { title: string; description: string }[];
  eligibility?: string[];
}

const Sapphire: React.FC<SapphireProps> = ({
  logo = '/images/Sapphire-Hair-Transplant.webp', // Make sure this image is in your public directory
  title = '',
  description = '',
  benefits = [],
  contactLink = '#',
  sapphireFUEDescription = '',
  sapphireFUEvsFUE = [],
  dhiDescription = '',
  sapphireFUEvsDHI = [],
  eligibility = []
}) => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header Section */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl mx-auto mb-12">
        <div className="relative w-full h-80">
          {logo && (
            <Image
              src={logo}
              alt={`${title} Logo`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          )}
        </div>
        <div className="p-6 bg-gray-100 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
          <p className="text-lg text-gray-700 mt-4">
            {description || 'The Sapphire Hair Transplant is a revolutionary approach in hair restoration, combining advanced techniques with state-of-the-art technology. This procedure focuses on achieving natural-looking results with minimal discomfort and downtime. Our team of experienced professionals is dedicated to providing personalized care, ensuring each patient receives the best possible outcome tailored to their individual needs and goals.'}
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {benefits.length > 0 ? (
            benefits.map((benefit, index) => (
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
                {benefit}
              </li>
            ))
          ) : (
            <li className="text-gray-500">
              The Sapphire FUE Hair Transplant offers numerous advantages, including precision in graft placement, minimal scarring, and a quick recovery time. This technique ensures natural-looking results by using advanced tools and methods. Additionally, the procedure is designed to be minimally invasive, reducing discomfort and allowing patients to resume their daily activities faster than with traditional methods.
            </li>
          )}
        </ul>
      </section>

      {/* What is Sapphire FUE Hair Transplant? */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Sapphire FUE Hair Transplant?</h2>
        <p className="text-gray-600">
          {sapphireFUEDescription || 'Sapphire FUE (Follicular Unit Extraction) is an advanced hair restoration technique that employs specially designed sapphire blades to extract and implant hair follicles with exceptional precision. This method enhances the overall success rate of the transplant by minimizing tissue damage and optimizing follicle survival. The use of sapphire blades allows for smaller incisions, which reduces the risk of scarring and speeds up the healing process, making it a preferred choice for many patients seeking a natural-looking hairline with minimal downtime.'}
        </p>
      </section>

      {/* Sapphire FUE Hair Transplant vs FUE Hair Transplant */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sapphire FUE Hair Transplant vs FUE Hair Transplant</h2>
        <div className="space-y-6">
          {sapphireFUEvsFUE.length > 0 ? (
            sapphireFUEvsFUE.map((comparison, index) => (
              <div key={index} className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{comparison.title}</h3>
                <p className="text-gray-600">{comparison.description}</p>
              </div>
            ))
          ) : (
            <div className="text-gray-500">
              Sapphire FUE offers significant improvements over traditional FUE techniques, including greater precision and reduced trauma to the scalp. Traditional FUE, while effective, may result in larger incisions and longer recovery times. Sapphire FUE's use of advanced sapphire blades allows for smaller incisions, less scarring, and a more refined aesthetic outcome. The comparison highlights the benefits of upgrading to the Sapphire FUE method for those seeking optimal results.
            </div>
          )}
        </div>
      </section>

      {/* What is DHI Hair Transplant? */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What is DHI Hair Transplant?</h2>
        <p className="text-gray-600">
          {dhiDescription || 'DHI (Direct Hair Implantation) is a modern hair restoration technique that simplifies the process by directly implanting hair follicles into the scalp without the need for prior incisions. This method involves using a specialized tool to extract and immediately place each follicle, ensuring precision and minimizing the risk of damage. DHI offers advantages such as a reduced risk of infection, faster recovery, and more controlled placement of hair follicles, resulting in a more natural-looking hairline and a quicker return to normal activities.'}
        </p>
      </section>

      {/* Sapphire FUE Hair Transplant vs DHI Hair Transplant */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sapphire FUE Hair Transplant vs DHI Hair Transplant</h2>
        <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sapphire FUE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DHI</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Technique</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Uses sapphire blades for follicle extraction and implantation.</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Directly implants follicles using a specialized tool without prior incisions.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Incision Size</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Smaller incisions, less scarring.</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">No incisions, reduced scarring.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Recovery Time</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Quick recovery with minimal downtime.</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fast recovery, with minimal post-procedure care required.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Precision</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">High precision due to advanced sapphire blades.</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">High precision with direct implantation technique.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Suitability</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ideal for those seeking natural-looking results with minimal scarring.</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ideal for those preferring a quick procedure with immediate results.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Eligibility For a Sapphire FUE Hair Transplant */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Eligibility For a Sapphire FUE Hair Transplant</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {eligibility.length > 0 ? (
            eligibility.map((criteria, index) => (
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
                {criteria}
              </li>
            ))
          ) : (
            <li className="text-gray-500">
              Candidates for Sapphire FUE Hair Transplant should ideally have a sufficient donor hair supply, be in good overall health, and have realistic expectations about the results. They should be willing to follow pre- and post-operative care instructions to ensure optimal outcomes. Consulting with a qualified specialist is crucial to determine if this advanced procedure is suitable for your specific needs.
            </li>
          )}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="text-center max-w-4xl mx-auto">
        <a
          href={contactLink}
          className="bg-black text-white py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Sapphire;
