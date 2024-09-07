import React from 'react';

const HairTransplantBeforeAfter: React.FC = () => {
  const mergedImages = [
    '/images/1.webp',
    '/images/2.webp',
    '/images/3.webp',
    '/images/4.webp',
    '/images/5.webp',
    '/images/6.webp',
    '/images/7.webp',
    '/images/8.webp',
    '/images/9.webp',
    '/images/10.webp',
    '/images/11.webp',
    '/images/12.webp',
    '/images/13.webp',
    '/images/14.webp',
    '/images/15.webp',
  ];

  return (
    <div className="bg-white p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-10 text-center">Hair Transplant Before & After</h2>

      {/* FUE Hair Transplant Turkey Before and After */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-black mb-6">FUE Hair Transplant Turkey Before and After</h3>
        <p className="text-lg text-gray-800 mb-6">
          With FUE hair transplant in Turkey, the results continue to improve over time. Within a week of the procedure, you will notice a new hairline and significant aesthetic improvement. However, optimal results are typically seen in the following weeks and months as your hair naturally continues to grow. The FUE hair transplant Turkey donor area after two weeks will show even further improvement. Our before and after photos demonstrate the quick results that can be achieved, with significant aesthetic changes seen in 6 to 12 months, including improvements to the hairline and overall hair growth.
        </p>
      </section>

      {/* Merged Before and After Image Pairs */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-black mb-6">Merged Before and After Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {mergedImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <img
                  src={image}
                  alt={`Merged ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <p className="text-center mt-2 text-gray-600">Image {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information Sections */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-black mb-6">Hair Transplant Surgery: Recovery and Maintenance</h3>
        <p className="text-lg text-gray-800 mb-4">
          Following a hair transplant surgery, it is crucial to adhere to the recovery and maintenance instructions provided by your surgeon. This will ensure the success of your hair transplant results. During the recovery period, it is important to avoid strenuous physical activity, direct sunlight, and swimming. Additionally, refrain from touching or scratching the transplanted area to prevent damage to the newly transplanted hair follicles.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          Once your hair transplant results have fully developed, maintaining the new hair growth is essential. This includes using gentle shampoos, avoiding harsh chemicals and heat styling tools, and protecting your hair from direct sunlight.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-black mb-6">Real Patient Stories</h3>
        <p className="text-lg text-gray-800 mb-4">
          Real patient stories offer valuable insight into the hair transplant experience. Many patients have experienced a significant improvement in hair density and appearance after undergoing a hair transplant. Before choosing a DHI hair transplant surgeon, it is important to research and read hair transplant Turkey reviews and testimonials to find the right surgeon for your needs.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-black mb-6">Results After 1 Year</h3>
        <p className="text-lg text-gray-800 mb-4">
          After one year of hair growth following a transplant, you will notice a significant transformation. The full head of hair developed through the transplant will contrast with the previous hair loss. The hair follicles continue to grow and reach their full potential. It is normal to experience hair shedding around four weeks after the procedure, followed by stronger follicles and permanent hair growth. Our hair transplant results in Turkey are of the highest standard, providing long-term satisfaction with your new aesthetic.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-black mb-6">Achieving Exceptional Results</h3>
        <p className="text-lg text-gray-800 mb-4">
          The hair transplant before and after results can be exceptional if you are a suitable candidate for the procedure. At Vera Clinic, we assess your suitability by examining your current level of hair loss and the number of healthy hair follicles suitable for transplant. Book a consultation with our expert medical team to determine the best course of treatment for the results you desire. Our state-of-the-art facilities and experienced team in Istanbul, Turkey ensure exceptional hair transplant results. Read our patient reviews and view our before and after photos to gain a comprehensive understanding of the results you can expect from our hair transplant clinic.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-black mb-6">FAQs</h3>
        <div className="text-lg text-gray-800">
          <div className="mb-6">
            <h4 className="text-2xl font-semibold mb-2">How much hair growth can I expect in a year?</h4>
            <p>
              During a hair transplant in Turkey, up to 7000 follicular units can be transplanted, resulting in all-over coverage and a natural hairline. After one year of hair growth, you can expect to see the full effects of the transplant.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-2xl font-semibold mb-2">Will I experience discomfort seven days after a hair transplant in Istanbul?</h4>
            <p>
              Typically, there is minimal discomfort associated with FUE hair transplant procedures. Patients may experience some swelling or irritation for a few days, but this can be managed with painkillers. By the end of the first week, the discomfort should subside.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-2xl font-semibold mb-2">Is a hair transplant permanent?</h4>
            <p>
              Yes, a hair transplant in Turkey provides long-term results if proper care is taken. With immediate results and continued growth over time, you can enjoy a natural-looking head of hair.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-2xl font-semibold mb-2">What is a hair transplant before after?</h4>
            <p>
              A hair transplant before after refers to the comparison of hair loss or baldness before undergoing a hair transplant procedure and the results achieved after the transplant.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-2xl font-semibold mb-2">What are the typical results of a hair transplant?</h4>
            <p>
              The typical results of a hair transplant vary depending on factors such as the extent of hair loss, the type of procedure performed, and individual characteristics. In most cases, the transplanted hair grows naturally, resulting in fuller and more natural-looking hair.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-2xl font-semibold mb-2">How long does it take to see the final results of a hair transplant?</h4>
            <p>
              The final results of a hair transplant may take several months to fully develop. Hair growth typically starts within 3-4 months, and the final results are generally visible after 9-12 months.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-2xl font-semibold mb-2">What are the before and after results of a 2000 grafts hair transplant?</h4>
            <p>
              The before and after results of a 2000 grafts hair transplant can vary for each individual. Significant results can be visible after 6-12 months, with continued improvement over 18-24 months. Visit our website to see examples of previous Vera Clinic patients who have undergone a 2000 graft hair transplant.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <p className="text-lg text-gray-700 mb-4">To see our latest results, follow our Instagram account.</p>
        <a href="https://www.instagram.com/yourclinic" className="text-blue-600 hover:underline text-lg font-semibold">
          Follow Our Instagram
        </a>
      </section>
    </div>
  );
};

export default HairTransplantBeforeAfter;
