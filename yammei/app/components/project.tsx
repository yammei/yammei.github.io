"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    index:      number;
    imageSRC:   string;
    title:      string;
    setActiveProjectIndex: (index: number) => void;
};

const Project: React.FC<Props> = ({ index, imageSRC='/./imgs/Blueprint Skewed.png', title='Project Title', setActiveProjectIndex }) => {

    return (
        <a className=''>
            <motion.div
                onClick={() => {
                    setActiveProjectIndex(index);
                }}
                className='cursor-pointer flex h-28 w-64 bg-blue-500 hover:bg-blue-700 rounded-lg overflow-hidden'
                whileHover={{ scale: 1.05, filter: 'brightness(1.05)' }}
                style={{ display: 'inline-block', filter: 'brightness(.8)' }}
            >
                <Image className='object-cover -mt-48 pt-2 overflow-hidden' src={imageSRC} height={200} width={300} alt='Image of project.' draggable={false}/>
            </motion.div>

            <p className='text-sm text-center text-gray-700 mx-auto'>{title}</p>
        </a>

    );

};

export default Project;