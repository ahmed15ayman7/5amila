import React, { useState } from 'react';

const HairGraftCalculator: React.FC = () => {
  const [baldArea, setBaldArea] = useState<number>(0);
  const [density, setDensity] = useState<number>(0);
  const [estimatedGrafts, setEstimatedGrafts] = useState<number | null>(null);

  const calculateGrafts = () => {
    const grafts = baldArea * density;
    setEstimatedGrafts(grafts);
  };

  return (
    <div className="bg-gray-50 p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Header Image */}
      <div className="relative mb-8">
        <img
          src="/images/hair-graft-calculator.webp" // Replace with your header image path
          alt="Hair Graft Calculator"
          className="w-full h-72 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-t-lg" />
      </div>

      <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">Hair Graft Calculator</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Use this calculator to estimate the number of hair grafts you might need for a successful hair restoration procedure. 
        Input the area of baldness and desired density to get an estimate.
      </p>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <div>
          <label className="block text-gray-800 font-semibold mb-2">Bald Area (sq cm):</label>
          <input
            type="number"
            value={baldArea}
            onChange={(e) => setBaldArea(Number(e.target.value))}
            className="w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter bald area in square centimeters"
          />
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2">Desired Density (grafts per sq cm):</label>
          <input
            type="number"
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
            className="w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter desired density in grafts per square centimeter"
          />
        </div>
      </div>

      <button
        onClick={calculateGrafts}
        className="w-full bg-blue-700 text-black p-3 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Calculate Grafts
      </button>

      {estimatedGrafts !== null && (
        <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-3xl font-semibold text-green-600 mb-3">Estimated Number of Grafts:</h3>
          <p className="text-xl text-gray-700">
            {estimatedGrafts.toLocaleString()} grafts
          </p>
        </div>
      )}

      {/* Additional Information Sections */}
      <section className="mt-12">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">500 Grafts vs 5000 Grafts Hair Transplant</h3>
        <p className="text-lg text-gray-600 mb-4">
          When comparing hair grafts amounts, no two people are the same, but the hair transplant procedure will follow the same rule. If you have extensive hair loss, you can expect to need a higher number of donor hair follicles to help achieve the results you want. Where one person may need a 1000 grafts hairline, another with a similar hair loss issue might require more. A 2300 grafts hair transplant will naturally take longer to perform than 1000 grafts, so procedure times can vary.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          The number of grafts doesn't necessarily affect the naturalness of the results. For instance, a 2000 grafts transplant might look similar to a smaller 1000 grafts procedure if done effectively. The skill and expertise of the surgeons at our clinic make it hard to distinguish between different numbers of grafts when evaluating the results.
        </p>
      </section>

      <section className="mt-12">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">Choosing the Right Amount with Hair Graft Calculator</h3>
        <p className="text-lg text-gray-600 mb-4">
          At our clinic, we ensure that the right number of hair grafts is selected based on each individual’s needs. Surgeons will recommend the optimal amount to achieve the best results. The hair graft calculator provides an estimate and may suggest a range, but the final number may vary slightly based on your specific case. If you're not suitable for a transplant, we will explain why.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          To find out more, book a consultation with us, and we will accurately assess your requirements.
        </p>
      </section>

      <section className="mt-12">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">Unshaven Hair Transplant</h3>
        <p className="text-lg text-gray-600 mb-4">
          Unshaven hair transplant involves taking donor hair from the back of your head and transplanting it to the front, where hair loss has occurred. This method aims to provide a full head of hair without visible surgery scars. The donor area must be shaved before the procedure to ensure only healthy follicles are used.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          This procedure is often used to treat male pattern baldness. The transplanted hair will grow as naturally as the existing hair on your scalp.
        </p>
      </section>

      <section className="mt-12">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">DHI Hair Transplant</h3>
        <p className="text-lg text-gray-600 mb-4">
          The DHI (Direct Hair Implantation) system performs hair transplants without shaving the head. Hair follicles are extracted from the donor area and implanted into the recipient area using a micro-needling device. This method is virtually painless and causes less damage to surrounding tissues compared to traditional methods.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          DHI uses fewer grafts, leading to higher patient satisfaction due to its precision and minimal tissue damage.
        </p>
      </section>

      <section className="mt-12">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">Sapphire FUE Hair Transplant</h3>
        <p className="text-lg text-gray-600 mb-4">
          Sapphire FUE (Follicular Unit Extraction) uses a sapphire blade to extract and implant hair follicles. This method improves hair density and quality and is suitable for both men and women. The procedure takes about four hours and involves making small incisions with a sapphire blade to minimize scarring.
        </p>
      </section>

      <section className="mt-12">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">Hair Graft Calculator FAQs</h3>
        <div className="text-gray-700">
          <h4 className="text-2xl font-semibold mb-4">During the Procedure, 1 Graft Equals How Many Hairs?</h4>
          <p className="mb-4">
            The number of hairs per graft varies, with many people having 2 hairs per graft on average. For instance, a 3000 grafts transplant could mean approximately 6000 hairs. The actual number will be assessed during your consultation.
          </p>

          <h4 className="text-2xl font-semibold mb-4">Is a Hair Transplant in Turkey with Unlimited Grafts Possible?</h4>
          <p className="mb-4">
            An unlimited number of hair grafts cannot be transplanted. The average person has about 5000-7000 grafts suitable for the procedure. During a consultation, we'll determine if there are enough healthy grafts available for your transplant.
          </p>

          <h4 className="text-2xl font-semibold mb-4">How Do I Know Which Hair Graft Amount Is Right for Me?</h4>
          <p className="mb-4">
            The most accurate way to determine the right number of grafts is through a consultation. Our calculator provides an estimate, but the final number will be decided based on a detailed assessment of your hair loss and other factors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HairGraftCalculator;
