"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {

    const bottomBorderColor: string = 'cyan';
    const navbarLinks: string[] = [
        'Home',
        'Resume',
        ''
    ];

    return (
        <div className='bg-fixed flex flex-row h-fit w-1000 p-3 bg-black-light rounded-b-xl z-10'>
            <div className='mx-auto'>
                <motion.a
                    style={{ borderBottomWidth: 2, borderColor: 'rgb(10, 10, 10)' }}
                    whileHover={{ color: 'rgb(225, 225, 225)', borderBottomWidth: 2, borderColor: bottomBorderColor }}
                    className='inline-block text-sm text-center w-20 pb-1 text-gray-400 mx-1'
                    href='/'>
                    {navbarLinks[0]}
                </motion.a>
                <motion.a
                    style={{ borderBottomWidth: 2, borderColor: 'rgb(10, 10, 10)' }}
                    whileHover={{ color: 'rgb(225, 225, 225)', borderBottomWidth: 2, borderColor: bottomBorderColor }}
                    className='inline-block text-sm text-center w-20 pb-1 text-gray-400 mx-1'
                    href='/'>
                    {navbarLinks[1]}
                </motion.a>
            </div>
        </div>
    );

};

export default NavBar;