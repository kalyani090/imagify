import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center my-24 px-6 md:px-28'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-12'>Turn your imagination into visuals</p>

      <div className='flex flex-col gap-10 md:gap-20 md:flex-row items-center'>
        <motion.img
          src={assets.sample_img_1}
          alt=""
          className='w-72 md:w-96 rounded-xl shadow-lg'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        <motion.div
          className='text-left max-w-xl'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className='text-2xl sm:text-3xl font-semibold mb-4'>
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className='text-gray-600 mb-4'>
            Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
          </p>
          <p className='text-gray-600'>
            Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
