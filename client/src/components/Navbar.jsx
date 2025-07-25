import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {


  const { user, setShowLogin,logout,credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <motion.div
      className='flex items-center justify-between py-4'
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link to='/'>
        <motion.img
          src={assets.logo}
          alt="Logo"
          className='w-28 sm:w-32 lg:w-40'
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </Link>

      <div>
        {user ? (
          <div className='flex items-center gap-2 sm:gap-3'>
            <motion.button
              onClick={() => navigate('/buy')}
              className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <img className='w-5' src={assets.credit_star} alt="star" />
              <p className='text-xs sm:text-sm font-medium text-gray-600'>
                Credits left : {credit}
              </p>
            </motion.button>

            <p className='text-gray-600 max-sm:hidden pl-4'>Hi,{user.name} </p>

            <div className='relative group'>
              <motion.img
                src={assets.profile_icon}
                className='w-10 drop-shadow'
                alt="profile"
                whileHover={{ scale: 1.05 }}
              />
              <AnimatePresence>
                <motion.div
                  className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm shadow-md'>
                    <li  onClick={logout} className='py-1 px-2 cursor-pointer pr-10 hover:bg-gray-100 transition-all rounded'>
                      Logout
                    </li>
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <motion.div
            className='flex items-center gap-2 sm:gap-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.p
              onClick={() => navigate('/buy')}
              className='cursor-pointer'
              whileHover={{ scale: 1.05, color: '#3b82f6' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Pricing
            </motion.p>

            <motion.button
              onClick={() => setShowLogin(true)}
              className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Login
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
