import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const OurQualityStandards = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-gray-800 mb-8 text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Our Quality Standards
        </motion.h1>
        <motion.p
          className="text-lg leading-relaxed text-gray-600 mb-12 text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          At 5amila, we are committed to maintaining the highest standards of quality in all our operations. 
          Our dedication to excellence ensures that we deliver products and services that exceed industry benchmarks.
        </motion.p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={scaleUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Excellence</h2>
            <p className="text-base leading-relaxed text-gray-700">
              We strive for excellence in every aspect of our work, ensuring that each product and service we provide is of the highest quality.
            </p>
          </motion.div>
         
<motion.div
className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
variants={scaleUp}
initial="hidden"
animate="visible"
transition={{ duration: 0.8, ease: "easeInOut" }}
>
<h2 className="text-2xl font-semibold text-blue-600 mb-4">Innovation</h2>
<p className="text-base leading-relaxed text-gray-700">
  Embracing innovation, we continually seek new ways to improve our processes and offerings, staying ahead in a competitive market.
</p>
</motion.div>
<motion.div
className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
variants={scaleUp}
initial="hidden"
animate="visible"
transition={{ duration: 0.8, ease: "easeInOut" }}
>
<h2 className="text-2xl font-semibold text-blue-600 mb-4">Customer Satisfaction</h2>
<p className="text-base leading-relaxed text-gray-700">
  Our customers' needs are our top priority. We work diligently to ensure their satisfaction and to build lasting relationships.
</p>
</motion.div>
<motion.div
className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
variants={scaleUp}
initial="hidden"
animate="visible"
transition={{ duration: 0.8, ease: "easeInOut" }}
>
<h2 className="text-2xl font-semibold text-blue-600 mb-4">Sustainability</h2>
<p className="text-base leading-relaxed text-gray-700">
  We are dedicated to sustainability, incorporating eco-friendly practices and materials in our operations to reduce our environmental footprint.
</p>
</motion.div>
<motion.div
className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
variants={scaleUp}
initial="hidden"
animate="visible"
transition={{ duration: 0.8, ease: "easeInOut" }}
>
<h2 className="text-2xl font-semibold text-blue-600 mb-4">Commitment</h2>
<p className="text-base leading-relaxed text-gray-700">
  Our commitment to quality is unwavering. We adhere to the highest standards and continuously monitor our processes to ensure exceptional results.
</p>
</motion.div>
<motion.div
className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
variants={scaleUp}
initial="hidden"
animate="visible"
transition={{ duration: 0.8, ease: "easeInOut" }}
>
<h2 className="text-2xl font-semibold text-blue-600 mb-4">Team Excellence</h2>
<p className="text-base leading-relaxed text-gray-700">
  Our team is our greatest asset. We invest in ongoing training and development to ensure that every member contributes to our high standards of quality.
</p>
</motion.div>
</div>
<motion.p
className="text-lg leading-relaxed text-gray-600 mt-12 text-center"
variants={fadeIn}
initial="hidden"
animate="visible"
transition={{ duration: 1, ease: "easeInOut" }}
>
Our dedicated team is committed to these standards, driving our mission to deliver exceptional value. Thank you for choosing us and for your trust in our quality.
</motion.p>
</div>
</section>
);
};

export default OurQualityStandards;
