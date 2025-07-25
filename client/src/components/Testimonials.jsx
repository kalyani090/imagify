import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center my-20 py-12'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
      <p className='text-gray-500 mb-12'>What Our Users Are Saying</p>

      <div className='flex flex-wrap gap-6 justify-center'>
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className='bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className='flex flex-col items-center'>
              <img src={testimonial.image} alt={testimonial.name} className='rounded-full w-14' />
              <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
              <p className='text-gray-500 mb-4'>{testimonial.role}</p>

              <div className='flex mb-4'>
                {Array(testimonial.stars).fill().map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={assets.star_icon}
                    alt="star"
                    className='w-4 h-4 mx-0.5'
                  />
                ))}
              </div>

              <p className='text-center text-sm text-gray-600'>{testimonial.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
