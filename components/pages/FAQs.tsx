import React from 'react';
import 'animate.css'; // Import Animate.css if using

const FAQs: React.FC = () => {
  return (
    <div className="bg-white p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-lg shadow-lg max-w-3xl mx-auto animate__animated animate__fadeIn">
      
      {/* Top Image */}
      <div className="mb-8">
        <img
          src="/images/Hair-FAQs.webp" // Replace with your image path
          alt="Hair Transplant FAQs"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      
      <h2 className="text-4xl font-extrabold text-blue-800 mb-8 text-center animate__animated animate__fadeIn">Hair Transplant FAQs</h2>

      <section className="mb-6">
        <h3 className="text-3xl font-semibold text-black mb-4 animate__animated animate__fadeIn">How much hair growth can I expect in a year?</h3>
        <p className="text-lg text-gray-800 animate__animated animate__fadeIn">
          During a hair transplant, up to 7000 follicular units can be transplanted, leading to all-over coverage and a natural hairline. After one year of hair growth, you can expect to see the full effects of the transplant, including improved density and natural appearance.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-3xl font-semibold text-black mb-4 animate__animated animate__fadeIn">Will I experience discomfort seven days after a hair transplant?</h3>
        <p className="text-lg text-gray-800 animate__animated animate__fadeIn">
          Typically, there is minimal discomfort associated with FUE hair transplant procedures. Some patients might experience swelling or irritation for a few days, but this is manageable with painkillers. By the end of the first week, most of the discomfort should have subsided.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-3xl font-semibold text-black mb-4 animate__animated animate__fadeIn">Is a hair transplant permanent?</h3>
        <p className="text-lg text-gray-800 animate__animated animate__fadeIn">
          Yes, a hair transplant provides long-term results if proper care is maintained. The transplanted hair follicles are typically permanent, and with continued growth over time, you can achieve a natural-looking and lasting result.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-3xl font-semibold text-black mb-4 animate__animated animate__fadeIn">What should I expect during the recovery period?</h3>
        <p className="text-lg text-gray-800 animate__animated animate__fadeIn">
          During the recovery period, it is important to follow your surgeon's instructions closely. Avoid strenuous physical activities, direct sunlight, and swimming. Refrain from touching or scratching the transplanted area to ensure the health of the newly transplanted follicles.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-3xl font-semibold text-black mb-4 animate__animated animate__fadeIn">How long does it take to see the final results of a hair transplant?</h3>
        <p className="text-lg text-gray-800 animate__animated animate__fadeIn">
          The final results of a hair transplant can take several months to fully develop. Hair growth usually starts within 3-4 months, with the final results becoming visible after 9-12 months. Patience is key as the transplanted hair goes through a natural growth cycle.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-3xl font-semibold text-black mb-4 animate__animated animate__fadeIn">What are the risks associated with hair transplant surgery?</h3>
        <p className="text-lg text-gray-800 animate__animated animate__fadeIn">
          While hair transplant surgery is generally safe, there are potential risks including infection, scarring, or an unnatural appearance if the procedure is not performed correctly. Choosing an experienced surgeon can help minimize these risks and ensure a successful outcome.
        </p>
      </section>

      <section className="text-center">
        <p className="text-lg text-gray-800 mb-4 animate__animated animate__fadeIn">
          If you have more questions or need personalized advice, feel free to contact our clinic for a consultation.
        </p>
        <a href="https://www.instagram.com/yourclinic" className="text-blue-600 hover:underline text-lg animate__animated animate__fadeIn">
          Follow Us on Instagram for the Latest Updates
        </a>
      </section>
    </div>
  );
};

export default FAQs;
