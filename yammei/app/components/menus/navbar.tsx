"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {

    const bottomBorderColor: string = '#ffcc00';
    const navbarLinks: string[] = [
        'Home',
        'About',
        'Resume'
    ];

    return (
        <div
            className='fixed flex flex-row top-0 h-fit p-3 bg-gray-200 rounded-b-xl drop-shadow'
            style={{ width: '95vw', maxWidth: '600px', zIndex: 1 }}
            >
            <div className='mx-auto'>
                <motion.a
                    whileHover={{ color: 'rgb(50, 50, 50)', borderBottomWidth: 2, borderColor: bottomBorderColor }}
                    className='inline-block text-sm text-center w-20 pb-1 text-gray-500 mx-1 border-b-2 border-gray-200'
                    href='/'>
                    {navbarLinks[0]}
                </motion.a>
                <motion.a
                    whileHover={{ color: 'rgb(50, 50, 50)', borderBottomWidth: 2, borderColor: bottomBorderColor }}
                    className='inline-block text-sm text-center w-20 pb-1 text-gray-500 mx-1 border-b-2 border-gray-200'
                    href='/'>
                    {navbarLinks[1]}
                </motion.a>
                <motion.a
                    whileHover={{ color: 'rgb(50, 50, 50)', borderBottomWidth: 2, borderColor: bottomBorderColor }}
                    className='inline-block text-sm text-center w-20 pb-1 text-gray-500 mx-1 border-b-2 border-gray-200'
                    href='/'>
                    {navbarLinks[2]}
                </motion.a>
            </div>
        </div>
    );

};

export default NavBar;