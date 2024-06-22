"use client";

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import ContentContainer from './content_container';

interface Props {
    children: ReactNode;
}

const Portfolio: React.FC<Props> = ({ children }) => {


    return (
        <ContentContainer>
            <motion.div
                className='grid grid-rows-3 grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-0 place-items-center my-5 h-auto slider-content'
                transition={{ duration: .5, ease: 'easeInOut' }}
            >
                { children }
            </motion.div>

        </ContentContainer>
    );

};

export default Portfolio;