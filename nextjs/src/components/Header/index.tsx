'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='h-[8vh] sticky top-0 z-50 bg-mainBackgroundColor flex justify-between items-center'>
      <h1 className='text-2xl md:text-3xl font-bold text-yellow-500'>
        TECH BLOG
      </h1>
      <nav className='hidden md:block'>
        <ul className='flex space-x-10 font-semibold text-xl'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/articles'>Articles</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      <button className='md:hidden' onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className='fixed top-0 right-0 w-full h-full bg-white z-50 shadow-xl overflow-y-auto'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className='flex items-center justify-between p-4 border-b border-gray-200'>
              <h2 className='text-2xl font-bold'>TECH BLOG</h2>
              <button onClick={toggleMenu}>
                <X size={28} />
              </button>
            </div>
            <ul className='flex flex-col space-y-6 p-6 text-lg font-semibold'>
              <li>
                <Link href='/' className='block' onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/articles' className='block' onClick={toggleMenu}>
                  Articles
                </Link>
              </li>
              <li>
                <Link href='/about' className='block' onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href='/contact' className='block' onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
