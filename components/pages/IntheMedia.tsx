import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for fade-in effect
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MediaAndPartners = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Media Section */}
        <motion.div
          className="mb-12 text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">In the Media</h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            Discover our latest features and media coverage from prominent outlets.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            5amila is a leading hair transplant clinic in Istanbul, Turkey, with a reputation for providing natural-looking results, perfect hairlines, and high hair densities. If you’re considering a hair transplant in Turkey, you’ll want to choose a clinic with experience and expertise, like 5amila.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mt-6">
            At 5amila, we prioritize good aftercare for our patients, ensuring that they receive the best possible treatment and guidance throughout their hair transplant journey. Our surgeons combine their knowledge with modern facilities to provide a patient-centered approach to hair restoration.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mt-6">
            As Everton FC‘s first-ever official hair transplant partner, 5amila has attracted global attention and recognition for our expertise in hair restoration. Our team of experts has conducted research on various topics, including the connection between musical genres and anxiety, the popularity of certain hairstyles on dating apps, and the earnings potential of reality TV show participants on Instagram.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mt-6">
            Whether you’re interested in learning about hair loss treatments, the beauty routines of the British royal family, or how to recreate iconic Disney looks, 5amila’s research and expertise can provide valuable insights. Our team of specialists includes hair transplant specialists, celeb hair stylists, and medical professionals who offer their opinions and advice on a range of topics related to hair and beauty.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mt-6">
            To relieve stress and reduce hair loss, our research has found that listening to certain musical genres, such as heavy metal and 1980s pop, can be effective. We’ve also explored the beauty routines and favorite products of celebrities like Meghan Markle, Kate Middleton, and Ariana Grande.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mt-6">
            At 5amila, we believe in providing our patients and readers with useful and informative content that can help them make informed decisions about their hair and beauty needs. Whether you’re interested in learning about the latest hair transplant techniques or exploring the world of beauty and fashion, we’re here to provide the expert guidance and insights you need.
          </p>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Valued Partners</h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-12">
            We are proud to collaborate with these distinguished organizations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Partner Images */}
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner1.webp" alt="Partner 1" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner2.webp" alt="Partner 2" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner3.webp" alt="Partner 3" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner4.webp" alt="Partner 4" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner5.webp" alt="Partner 5" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner6.webp" alt="Partner 6" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner7.webp" alt="Partner 7" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner8.webp" alt="Partner 8" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner9.webp" alt="Partner 9" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner10.webp" alt="Partner 10" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner11.webp" alt="Partner 11" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner12.webp" alt="Partner 12" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner13.webp" alt="Partner 13" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner14.webp" alt="Partner 14" className="h-16 w-auto object-contain" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/partner15.webp" alt="Partner 15" className="h-16 w-auto object-contain" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaAndPartners;
